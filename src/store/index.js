import counter from './modules/counter';

const debug = process.env.NODE_ENV !== 'production';

export default {
  modules: {
    counter,
  },
  strict: debug,
};
