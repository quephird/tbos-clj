uniform vec2 u_resolution;
uniform float u_time;

#define PI 3.1415926

float beatingCircle(float smoothness, float radius, float t) {
    float maxR = 0.2 + 0.1*sin(3*PI*t);
    return 1.0 - smoothstep(maxR-smoothness, maxR, radius);
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;

    float r = distance(st, vec2(0.5) + 0.3*vec2(cos(2*PI*u_time), sin(2*PI*u_time)));

    vec3 color = vec3(0.5, 0.0, 1.0) * vec3(beatingCircle(0.1, r, u_time));

  	gl_FragColor = vec4( color, 1.0 );
}