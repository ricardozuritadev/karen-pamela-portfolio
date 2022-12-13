import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

type ScubaDiverMotionStyleType = {
  fill: any;
};

const ScubaDiver = () => {
  const { scrollYProgress } = useScroll();

  const scubaScrollColor: MotionValue = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['#161616', '#161616', '#FFFFFF']
  );

  const scubaDiverMotionStyle: ScubaDiverMotionStyleType = {
    fill: scubaScrollColor,
  };

  return (
    <motion.svg
      id="scuba-diver"
      width="103"
      height="330"
      viewBox="0 0 103 330"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M69.2186 277.48C65.0441 273.212 42.2288 269.812 28.7733 279.6C15.3178 289.389 12.4757 301.883 20.49 312.919C28.5042 323.956 44.6114 323.424 58.0669 313.674C71.5224 303.925 78.749 287.223 69.2186 277.48Z"
        fill="none"
        style={scubaDiverMotionStyle}
      />
      <motion.path
        d="M40.7456 156.357C47.7818 147.756 58.0277 154.702 60.9091 167.104C63.7906 179.506 65.379 193.247 66.9805 207.152C69.0809 225.417 65.6022 247.654 58.8547 257.791C57.6195 259.726 56.0531 261.428 54.2273 262.82C54.1879 265.787 53.9582 270.481 57.8964 273.816C60.2068 275.786 38.9668 278.793 39.3803 278.412C43.8567 274.164 43.8764 267.015 43.4892 263.135C41.1 261.231 39.3606 257.882 38.8421 253.385C37.5294 242.178 46.4625 212.142 48.4382 202.432C52.1729 184.082 29.246 170.393 40.7456 156.357Z"
        style={scubaDiverMotionStyle}
      />
      <motion.path
        d="M29.0227 157.302C27.9003 170.393 34.6215 184.719 34.6149 196.556C36.9188 201.651 55.2905 246.091 55.6187 251.586C55.9468 257.082 49.7507 259.465 45.6485 255.421C41.5462 251.376 32.3308 214.138 24.6513 200.417C24.5165 200.183 24.4169 199.931 24.3559 199.668V199.668C22.039 196.812 25.7409 174.93 21.2776 156.83C20.2274 152.608 29.3509 153.409 29.0227 157.302Z"
        style={scubaDiverMotionStyle}
      />
      <motion.path
        d="M77.2595 105.331C77.4368 104.632 77.6785 103.951 77.9815 103.296C74.6997 90.8221 76.7278 69.091 72.3564 56.4988C69.987 49.6643 80.3575 49.0406 80.6201 56.0129C81.1255 69.7081 88.595 96.7177 88.9625 103.854C89.5286 105.878 89.4086 108.032 88.6212 109.98C86.7243 115.232 69.4159 169.323 54.0701 176.013C48.6813 178.357 39.0984 172.921 39.9385 166.559C41.7173 152.805 72.2842 124.916 77.2595 105.331Z"
        style={scubaDiverMotionStyle}
      />
      <motion.path
        d="M34.4115 56.4265C39.9184 68.3359 54.3257 92.4371 55.9469 101.07C56.0268 101.221 56.0843 101.383 56.1175 101.55C57.8241 109.605 67.814 160.394 57.4303 173.538C53.7874 178.134 42.7736 177.884 40.5092 171.884C35.6061 158.904 44.5589 123.077 43.6728 102.902C43.6451 102.331 43.6847 101.758 43.791 101.195C43.791 101.195 43.791 101.195 43.791 101.195C39.3799 87.1701 33.8577 73.5192 27.2768 60.3723C23.1548 52.1066 30.8277 48.6532 34.4115 56.4265Z"
        style={scubaDiverMotionStyle}
      />
      <motion.path
        d="M26.3255 147.52C29.5417 153.074 29.6073 160.651 27.0803 161.668C24.5533 162.686 20.0769 155.93 19.2433 151.978C17.8912 145.577 12.0233 139.865 14.5765 138.847C17.1298 137.83 23.0502 141.887 26.3255 147.52Z"
        style={scubaDiverMotionStyle}
      />
      <motion.path
        d="M33.2302 27.6181C36.9649 42.3178 34.9039 57.477 28.4978 60.2476C23.4241 62.4469 19.7681 42.7576 19.6172 33.2314C19.3677 17.7898 8.05198 3.03107 12.1214 0.562526C15.7774 -1.64998 29.4364 12.6886 33.2302 27.6181Z"
        style={scubaDiverMotionStyle}
      />
      <motion.path
        d="M77.2857 25.6157C70.6105 38.9957 67.5715 62.7358 75.3166 59.2103C83.193 55.6322 87.0721 39.5144 89.4088 31.0255C93.4126 16.4768 110.143 -0.192464 97.9941 2.83413C93.3339 3.98962 83.3833 13.3977 77.2857 25.6157Z"
        style={scubaDiverMotionStyle}
      />
      <motion.path
        d="M40.3896 317.65L59.1407 308.449L62.4939 315.287C63.0896 316.501 63.1785 317.903 62.741 319.183C62.3035 320.463 61.3756 321.517 60.1612 322.113L50.5677 326.82C49.3533 327.416 47.9521 327.505 46.6722 327.068C45.3923 326.63 44.3386 325.702 43.7429 324.487L40.3896 317.65Z"
        style={scubaDiverMotionStyle}
      />
      <motion.path
        d="M22.2952 314.718C16.0532 311.436 5.6104 287.741 10.7563 271C15.154 256.72 10.2181 242.021 0.667969 226.724C10.3888 233.092 29.489 250.28 23.457 268.466C17.681 285.877 28.5307 317.988 22.2952 314.718Z"
        style={scubaDiverMotionStyle}
      />
      <motion.path
        d="M44.8018 286.369C33.6436 294.248 25.5702 259.583 28.5895 247.49C31.169 237.176 31.0443 233.473 25.439 220.854C29.5347 226.106 38.2644 230.223 35.5536 244.214C33.0594 257.055 41.9532 279.056 44.8018 286.369Z"
        style={scubaDiverMotionStyle}
      />
      <motion.path
        d="M19.5186 295.699C25.7409 296.9 40.0038 273.587 32.1799 258.125C25.5047 244.929 20.3653 226.139 24.4085 207.487C17.8843 212.306 12.0426 234.924 20.0962 253.064C27.4869 269.72 13.6113 294.563 19.5186 295.699Z"
        style={scubaDiverMotionStyle}
      />
    </motion.svg>
  );
};

export default ScubaDiver;