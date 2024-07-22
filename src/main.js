import './app.css';
import App from './App.svelte';
import { hydrate } from 'svelte';

const app = hydrate(App, {
  target: document.getElementById('app'),
});

export default app;
