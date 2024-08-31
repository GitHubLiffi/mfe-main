import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
    {
        name: 'mfe-child1',
        entry: '',
        container: '#container',
        activeRule: '/mfe-child1',
    },
    {
        name: 'mfe-child2',
        entry: '',
        container: '#container',
        activeRule: '/mfe-child2',
    },

]);

start();