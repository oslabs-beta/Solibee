import { createSignal, For, createEffect } from 'solid-js';
import { Router, Route } from '@solidjs/router';
import Installation from '../components/Installation';
import Introduction from '../components/Introduction';
import ContentComponent from '../components/ContentComponent';

export default function ContentContainer() {
  return (
    <div class="max-w-3xl mx-auto pt-10 xl:max-w-none w-10/12 overflow-auto">
      <Router>
        <Route path="/installation" component={Installation} />
        <Route path="/introduction" component={Introduction} />
        <Route path="/component/drawer" component={ContentComponent} />
      </Router>
    </div>
  );
}
