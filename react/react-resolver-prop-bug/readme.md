# rrt

An attempt to reproduce a react-resolver + react-router bug I encountered.

Check ref [#55](https://github.com/ericclemmons/react-resolver/issues/55).

### Update: 07/25/2015

([commit](https://github.com/srph/rrt/commit/4de22f7993a60cda8a04d3758c587f06a980db4e))

It looks like the Resolver container isn't properly passing the `props` down to the original container. I'll have to check the source what causes this.

---

### Update: 07/24/2015

([commit](https://github.com/srph/rrt/tree/e8568c4fc45f9b04d75d4e1e1bef0bc9ac26c57e))

To quote my last comment on the issue,

> Hmm, I'm still investigating at the moment. I removed react-resolver, and it seems that the real issue is with `this.props.children`.
>
> To clarify. the issue was occuring because `this.props.children` was blank. I thought this was due to react resolver (although it doesn't make any sense, it was my last lead of the issue). This was primarily because I was doing something wrong with React Router (no default route).
>
> My bad, really. Sorry about this, @ericclemmons!

---

To check the original issue, locally setup [https://github.com/srph/rrt/commit/7798cabd42cedf74b100f9e79b5146be7f1a2bb6](7798ca).

```
git clone git@github.com:srph/rrt.git
git checkout 7798ca
npm install
npm run build
open index.html
```

The issue was *fixed* in the latest commits which is accessible through [gh-pages](https://srph.github.io/rrt).
