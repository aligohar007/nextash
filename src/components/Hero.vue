<template>
  <div
    class="w-full relative bg-cover bg-center 
           min-h-[120vh] sm:min-h-[130vh] md:min-h-[120vh] lg:min-h-[140vh] xl:min-h-[150vh]">

    <!-- Background Pattern -->
    <div>

      <!-- Welcome Text -->
      <div
        class="welcome-content absolute 
               top-[20%] sm:top-[22%] md:top-[25%] lg:top-[28%] 
               left-1/2 -translate-x-1/2 
               flex flex-col text-center">

        <div class="text-sm sm:text-base md:text-lg text-[var(--text)]">
          Welcome to <span class="text-[var(--primary)]">NexTash</span>
        </div>

        <div class="welcome-title leading-tight mt-2 space-y-2">
          <div
            class=" sm:text-2xl md:text-5xl lg:text-[5rem] font-bold 
                   transition-transform duration-700 ease-in-out 
                   hover:scale-105">
            {{ heroContent.subHeading }}
          </div>
          <div
            class=" sm:text-2xl md:text-5xl lg:text-[5rem] font-bold 
                   whitespace-nowrap 
                   transition-transform duration-700 ease-in-out 
                   hover:scale-105">
            {{ heroContent.tagline }}
          </div>
        </div>
      </div>
    </div>

    <!-- Cube Left -->
    <div class="absolute left-5 sm:left-8 md:left-[50px] top-10 sm:top-[60px] md:top-[80px] scale-75 sm:scale-90 md:scale-100">
      <Anicube1 />
    </div>

    <!-- Book Animation Right -->
    <div class="absolute right-[10%] sm:right-[20%] md:right-[30%] top-[40px] sm:top-[50px] md:top-[60px] scale-75 sm:scale-90 md:scale-100 perspective-[2000px]">
      <div class="relative w-[70px] sm:w-[80px] md:w-[100px] h-[110px] sm:h-[130px] md:h-[150px] [transform-style:preserve-3d] animate-[book-rotate_6s_linear_infinite]">
        <div class="absolute w-full h-full bg-[#222] [transform:translateZ(5px)]"></div>
        <div class="absolute w-full h-full bg-[#222] [transform:translateZ(-5px)]"></div>
        <div class="absolute w-[10px] h-full bg-[#444] [transform:rotateY(90deg)_translateZ(95px)]"></div>
        <div class="absolute w-[10px] h-full bg-[#444] [transform:rotateY(-90deg)_translateZ(5px)]"></div>
        <div class="absolute w-full h-[10px] bg-[var(--primary)] [transform:rotateX(90deg)_translateZ(75px)]"></div>
        <div class="absolute w-full h-[10px] bg-[var(--primary)] [transform:rotateX(-90deg)_translateZ(75px)]"></div>
      </div>
    </div>

    <!-- Moving Square -->
    <div class="ani-5 left-3 sm:left-5 md:left-[30px] top-1/3 absolute">
      <div class="moving-square-frame"></div>
      <div class="ani-moving-square"></div>
    </div>

    <div class="ani ani-3   top-1/2 right-0">
  <div class="ani-cube ani-cube-3 w-[150px] h-[150px]">
    <div class="cube-face face_front"></div>
    <div class="cube-face face_right"></div>
    <div class="cube-face face_left"></div>
    <div class="cube-face face_top"></div>
    <div class="cube-face face_bottom"></div>
    <div class="cube-face face_back"></div>
  </div>
</div>


    <!-- Cube Right -->
    <div class="ani ani-3 absolute right-5 sm:right-10 md:right-[80px] bottom-[40%] md:bottom-[50%] transform translate-x-1/2 translate-y-1/2 scale-75 sm:scale-90 md:scale-100 perspective-[1000px]">
      <div class="ani-cube ani-cube-3 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]"></div>
    </div>

    <!-- Airplane Animation -->
    <div class="absolute top-0 right-0 w-[200px] sm:w-[260px] md:w-[320px] h-[200px] sm:h-[260px] md:h-[320px]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path id="followPath"
          d="M394.1-214.9c-49.7,89.4,114.4,192.8,175.5,475.1c13,60.1,85.4,424-98.1,552.6 
          c-95.7,67-267.2,74.5-346.3-22.1c-70.8-86.5-49-233.9,19.2-305.2c102.4-107,353.9-89.1,593.2,96.5c139.6,107,294.1,258.4,415,468.6 
          c19.2,33.5,36.6,66.6,52.3,99.3c13,8.6,34,19.5,53.3,13.2c148-48.6,165.1-1094.5-338.5-1374.8C723.7-320.8,449-313.8,394.1-214.9z" />
        <path id="dashedPath"
          d="M394.1-214.9c-49.7,89.4,114.4,192.8,175.5,475.1c13,60.1,85.4,424-98.1,552.6 
          c-95.7,67-267.2,74.5-346.3-22.1c-70.8-86.5-49-233.9,19.2-305.2c102.4-107,353.9-89.1,593.2,96.5c139.6,107,294.1,258.4,415,468.6 
          c19.2,33.5,36.6,66.6,52.3,99.3c13,8.6,34,19.5,53.3,13.2c148-48.6,165.1-1094.5-338.5-1374.8C723.7-320.8,449-313.8,394.1-214.9z" />
        <path id="airplain" d="M8.04 84L92 48 8.04 12 8 40l60 8-60 8z">
          <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
            <mpath xlink:href="#followPath"></mpath>
          </animateMotion>
        </path>
      </svg>
    </div>
  </div>
</template>


<script setup>
import Anicube1 from "../../animation/Anicube1.vue";
import { heroContent } from "../../headerContent"

</script>

<style scoped>
 
svg #followPath {
  fill: none;
  stroke: var(--primary);
  stroke-width: 8;
  stroke-dasharray: 2870px;
  stroke-dashoffset: 2870px;
  animation: drawPath 5s linear infinite;
}

svg #dashedPath {
  fill: none;
  stroke: #fff;
  stroke-width: 14;
  stroke-dasharray: 50px;
}

svg #airplain {
  fill: var(--primary);
  transform: translate(-10px, -45px);
}


@keyframes drawPath {
  to {
    stroke-dashoffset: 0;
  }
}

.ani-2{
  perspective: 20000px;
  height: 100px;
  width: 100px;
  transform-style: preserve-3d;
  transform: rotateX(-30deg) rotateY(40deg) rotate(360deg);
  animation: ani-cube-1 20s linear infinite
}
.ani-5{
 left: 30px;
    top: 32%;
    position: absolute;
}
.moving-square-frame{
    position: absolute;
    height: 20px;
    width: 20px;
    top: 10px;
    left: 10px;
    opacity: .1;
    border: 1px solid #000
}
.ani-moving-square {
    background: var(--primary);
    height: 20px;
    width: 20px;
    animation: ani-moving-square 6s cubic-bezier(.7, 0, .7, 1) infinite
}

@keyframes ani-moving-square {
    0%,
    2.5% {
        transform: translate(0)
    }
    10%,
    15% {
        transform: translate(20px)
    }
    22.5%,
    27.5% {
        transform: translate(20px, 20px)
    }
    35%,
    40% {
        transform: translateY(20px)
    }
    47.5%,
    52.5% {
        transform: translate(0)
    }
    60%,
    65% {
        transform: translateY(20px)
    }
    72.5%,
    77.5% {
        transform: translate(20px, 20px)
    }
    85%,
    90% {
        transform: translate(20px)
    }
    97.5%,
    to {
        transform: translate(0)
    }
}

 .ani.ani-3 {
    position: absolute;
    right: 80px;
    bottom: 50%;
    transform: translate(50%, 50%) scale(.8);
    perspective: 1000px; 
}

.ani-cube.ani-cube-3 {
    position: relative;
    width: 100px;
    height: 100px;
    transform-style: preserve-3d;
    transform: scale(.6) rotateX(-63deg) rotateY(13deg) rotate(47deg);
    animation: ani-cube-3 20s cubic-bezier(.7, 0, .7, 1) infinite;
}

.ani-cube.ani-cube-3 .cube-face {
    position: absolute;
    width: 100px;
    height: 100px;
    background: transparent;
    border: 2px solid var(--primary);
    border-radius: 2px;
    box-shadow: inset 0 0 0 2px var(--primary), 0 0 0 2px var(--primary);
}

/* Cube Faces */
.cube-face.face_front  { transform: translateZ(50px); }
.cube-face.face_back   { transform: rotateY(180deg) translateZ(50px); }
.cube-face.face_right  { transform: rotateY(90deg) translateZ(50px); }
.cube-face.face_left   { transform: rotateY(-90deg) translateZ(50px); }
.cube-face.face_top    { transform: rotateX(90deg) translateZ(50px); }
.cube-face.face_bottom { transform: rotateX(-90deg) translateZ(50px); }

@keyframes ani-cube-3 {
    0% {
        transform: scale(.6) rotateX(-63deg) rotateY(13deg) rotate(47deg);
    }
    5%, 15%, 25%, 35%, 45%, 55%, 65%, 75%, 85%, 95% {
        transform: scale(.8) rotateX(-63deg) rotateY(-23deg) rotate(47deg);
    }
    10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90% {
        transform: scale(.6) rotateX(-63deg) rotateY(13deg) rotate(47deg);
    }
    100% {
        transform: scale(.6) rotateX(-63deg) rotateY(13deg) rotate(407deg);
    }
}


</style>
