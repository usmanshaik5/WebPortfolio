export default {
    output: {
      manualChunks(id) {
        if (id.includes('node_modules')) {
          return 'vendor';
        }
      },
    },
  };
  