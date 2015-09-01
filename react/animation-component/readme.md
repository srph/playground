## react/animation-component
Add animation bindings to your component.

## Gist
The React internals does not support this yet. See [#2187](https://github.com/facebook/react/issues/2187). To work around this, you may use this wrap this component.
```es6
render() {
  return (
    <AnimationComponent
      onTransitionEnd={/* Function */}
      onAnimationStart={/* Function */}
      onAnimationEnd={/* Function */}>
    </AnimationComponent>
  );
}
```