import { Button } from './components/button/button';

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8"/>
        <title>Qwik Blank App</title>
      </head>
      <body>
      <Button class={'test'} onClick$={() => {
        console.log('test');
      }}>CLICK ME</Button>
      </body>
    </>
  );
};
