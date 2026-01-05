"use client";
import { cn } from "@/lib/cn";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";

export const CanvasRevealEffect = ({
    animationSpeed = 0.4,
    opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
    colors = [[0, 255, 255]],
    containerClassName,
    dotSize,
    showGradient = true,
}: {
    animationSpeed?: number;
    opacities?: number[];
    colors?: number[][];
    containerClassName?: string;
    dotSize?: number;
    showGradient?: boolean;
}) => {
    return (
        <div className={cn("h-full relative bg-white w-full", containerClassName)}>
            <div className="h-full w-full">
                <DotMatrix
                    colors={colors ?? [[0, 255, 255]]}
                    dotSize={dotSize ?? 3}
                    opacities={
                        opacities ?? [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1]
                    }
                    shader={`
              float animation_speed_factor = ${animationSpeed.toFixed(1)};
              float intro_offset = 2.0;
              
              void main() {
                vec2 normalizedPixel = gl_FragCoord.xy / u_resolution;
                float time = u_time * animation_speed_factor;

                float r = rand(gl_FragCoord.xy);

                // Simple twinkling effect
                float opacity = step(0.5, sin(time + r * 10.0));
                
                // Color selection
                vec3 color = u_colors[int(mod(r * 10.0, float(u_total_colors)))];

                fragColor = vec4(color, opacity * u_opacities[int(mod(r * 10.0, 10.0))]);
                fragColor.rgb *= fragColor.a;
              }
            `}
                    center={["x", "y"]}
                />
            </div>
            {showGradient && (
                <div className="absolute inset-0 bg-gradient-to-t from-white to-white/0 dark:from-black dark:to-black/0" />
            )}
        </div>
    );
};

interface DotMatrixProps {
    colors?: number[][];
    opacities?: number[];
    totalSize?: number;
    dotSize?: number;
    shader?: string;
    center?: ("x" | "y")[];
}

const DotMatrix: React.FC<DotMatrixProps> = ({
    colors = [[0, 0, 0]],
    opacities = [0.04, 0.04, 0.04, 0.04, 0.04, 0.08, 0.08, 0.08, 0.08, 0.14],
    totalSize = 4,
    dotSize = 2,
    shader = "",
    center = ["x", "y"],
}) => {
    const uniforms = useMemo(() => {
        let colorsArray = [
            colors[0],
            colors[0],
            colors[0],
            colors[0],
            colors[0],
            colors[0],
        ];
        if (colors.length === 2) {
            colorsArray = [
                colors[0],
                colors[0],
                colors[0],
                colors[1],
                colors[1],
                colors[1],
            ];
        } else if (colors.length === 3) {
            colorsArray = [
                colors[0],
                colors[0],
                colors[1],
                colors[1],
                colors[2],
                colors[2],
            ];
        }

        return {
            u_colors: {
                value: colorsArray.map((c) => [c[0] / 255, c[1] / 255, c[2] / 255]),
                type: "uniform3fv",
            },
            u_opacities: {
                value: opacities,
                type: "uniform1fv",
            },
            u_total_colors: {
                value: colors.length,
                type: "uniform1f",
            },
            u_dot_size: {
                value: dotSize,
                type: "uniform1f",
            },
            u_resolution: {
                value: new THREE.Vector2(),
                type: "uniform2f",
            },
            u_time: {
                value: 0,
                type: "uniform1f",
            },
        };
    }, [colors, opacities, dotSize]);

    return (
        <Canvas
            className="h-full w-full"
            style={{
                width: "100%",
                height: "100%",

            }}
        >
            <ShaderMaterial
                source={`
        precision mediump float;
        in vec2 vUv;
        out vec4 fragColor;
        
        uniform vec3 u_colors[6];
        uniform float u_opacities[10];
        uniform float u_total_colors;
        uniform float u_time;
        uniform vec2 u_resolution;
        uniform float u_dot_size;

        float rand(vec2 st) {
            return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }

        ${shader}
        `}
                uniforms={uniforms}
                maxFps={60}
            />
        </Canvas>
    );
};

const ShaderMaterial = ({
    source,
    uniforms,
    maxFps = 60,
}: {
    source: string;
    uniforms: {
        [key: string]: {
            value: any;
            type: string;
        };
    };
    maxFps?: number;
}) => {
    const { size } = useThree();
    const ref = useRef<THREE.Mesh>(null);
    const materialRef = useRef<THREE.ShaderMaterial>(null);

    useFrame(({ clock }) => {
        if (materialRef.current) {
            if (materialRef.current.uniforms.u_time) {
                materialRef.current.uniforms.u_time.value = clock.getElapsedTime();
            }
            if (materialRef.current.uniforms.u_resolution) {
                materialRef.current.uniforms.u_resolution.value.set(
                    size.width * 2,
                    size.height * 2
                );
            }
        }
    });

    const getUniforms = () => {
        const preparedUniforms: any = {};
        for (const uniformName in uniforms) {
            const uniform = uniforms[uniformName];
            switch (uniform.type) {
                case "uniform1f":
                case "uniform3fv":
                case "uniform1fv":
                case "uniform2f":
                    preparedUniforms[uniformName] = { value: uniform.value, type: uniform.type };
                    break;
                default:
                    console.error(`Invalid uniform type: ${uniform.type}`);
                    break;
            }
        }
        return preparedUniforms;
    };

    const material = useMemo(() => {
        return new THREE.ShaderMaterial({
            vertexShader: `
        // three.js handles #version 300 es injection when glslVersion is set to GLSL3
        
        // 'in' attributes are handled by three.js (position, uv, etc.)
        // We need to declare 'out' for vUv
        out vec2 vUv;
        
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
            fragmentShader: source,
            uniforms: getUniforms(),
            glslVersion: THREE.GLSL3,
            blending: THREE.AdditiveBlending,
        });
    }, [size.width, size.height, source, JSON.stringify(uniforms)]);

    return (
        <mesh ref={ref}>
            <planeGeometry args={[size.width, size.height]} />
            <primitive object={material} ref={materialRef} attach="material" />
        </mesh>
    );
};
