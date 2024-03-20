import { defineApplicationConfig } from '@vben/vite-config';

export default defineApplicationConfig({
  overrides: {
    optimizeDeps: {
      include: [
        'echarts/core',
        'echarts/charts',
        'echarts/components',
        'echarts/renderers',
        'qrcode',
        '@iconify/iconify',
        'ant-design-vue/es/locale/zh_CN',
        'ant-design-vue/es/locale/en_US',
      ],
    },
    server: {
      proxy: {
        '/basic-api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/basic-api`), ''),
          // only https
          // secure: false
        },
        '/upload': {
          target: 'http://localhost:3300/upload',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/upload`), ''),
        },
        '/api': {
          target: 'http://172.30.81.179',
          changeOrigin: true,
          ws: true,
          // rewrite: (path) => path.replace(new RegExp(`^/api`), ''),
          // only https
          // secure: false
        },
        '/dipc': {
          target: 'http://172.30.81.179',
          changeOrigin: true,
          ws: true,
          // rewrite: (path) => path.replace(new RegExp(`^/dipc`), ''),
          // only https
          // secure: false
        },
        '/sys': {
          target: 'http://172.30.81.179',
          changeOrigin: true,
          ws: true,
          // rewrite: (path) => path.replace(new RegExp(`^/sys`), ''),
          // only https
          // secure: false
        },
        '/sqlen': {
          target: 'http://172.30.81.179',
          changeOrigin: true,
          ws: true,
          // rewrite: (path) => path.replace(new RegExp(`^/sqlen`), ''),
          // only https
          // secure: false
        },
        '/datashell': {
          target: 'http://172.30.81.179',
          changeOrigin: true,
          ws: true,
          // rewrite: (path) => path.replace(new RegExp(`^/datashell`), ''),
          // only https
          // secure: false
        },
        '/dp/azkaban': {
          target: 'http://172.30.81.179',
          changeOrigin: true,
          ws: true,
          // rewrite: (path) => path.replace(new RegExp(`^/dp/azkaban`), ''),
          // only https
          // secure: false
        },
      },
      open: true, // 项目启动后，自动打开
      warmup: {
        clientFiles: ['./index.html', './src/{views,components}/*'],
      },
    },
  },
});
