
// This pragma is required so that React JSX is used instead of Qwik JSX
/** @jsxImportSource react */

import { qwikify$ } from '@builder.io/qwik-react';
import {Input} from '@fluentui/react-components'

// Wrap the Input component with qwikify$ to make it work with Qwik
export const QwikFluentInput = qwikify$((props: any) => {
  return (
    <Input {...props} />
  );
});
