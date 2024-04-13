import { createSignal, For, createEffect } from 'solid-js';
import { Router, Route } from '@solidjs/router';
import Menu from '../components/Menu';
import ContentContainer from './ContentContainer';
import Installation from '../components/Installation';
import Introduction from '../components/Introduction';

export default function MainContainer() {
  return (
    <div class='flex grow'>
      <Menu />
      <ContentContainer />
    </div>
  );
}
