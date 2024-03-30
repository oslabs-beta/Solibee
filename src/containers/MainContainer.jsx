import { createSignal, For, createEffect } from 'solid-js';
import { Router, Route } from '@solidjs/router';
import Menu from '../components/Menu';
import ContentContainer from './ContentContainer';
import Installation from '../components/Installation';
import Introduction from '../components/Introduction';

export default function () {
  return (
    <div>
      <div class="flex">
        <Menu />
        <ContentContainer />
        {/* <Router>
          
          <Route path="/installation" component={Installation} />
          <Route path="/introduction" component={Introduction} />
          <Route path="/drawer" component={ContentContainer} />
        </Router> */}
      </div>
    </div>
  );
}
