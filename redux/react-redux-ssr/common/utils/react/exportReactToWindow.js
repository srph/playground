export default function exportReactToWindow() {
  if ( typeof window === 'undefined' ) {
    throw new Error('You are exporting React to a non-browser environment');
  }

  window.React = require('react');
}