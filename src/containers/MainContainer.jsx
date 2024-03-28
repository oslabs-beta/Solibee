import { createSignal, For, createEffect } from 'solid-js';
import { Router, Route } from '@solidjs/router';
import NavBar from '../components/NavBar';
import Menu from '../components/Menu';

export default function () {
  return (
    <div>
      <Menu />
      <Router>
        {/* <Route path="/introduction" component={Introduction} /> */}
        <Route path="/welcome" element={<div>welcome</div>} />
      </Router>
    </div>
  );
}