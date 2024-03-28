import { createSignal, For, createEffect } from 'solid-js';
import { Router, Route } from '@solidjs/router';
import Menu from '../components/Menu';
import ContentContainer from './ContentContainer';

export default function () {
  return (
    <div>
      <div class="flex">
        <Menu />
        <ContentContainer />
      </div>
      <Router>
        {/* <Route path="/introduction" component={Introduction} /> */}
        <Route path="/welcome" element={<div>welcome</div>} />
      </Router>
    </div>
  );
}
