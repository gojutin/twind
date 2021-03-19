# Module: twind/server

This module provides asynchronous Node.JS **only** Static Extraction a.k.a. Server Side Rendering (SSR). In most cases the [synchronous SSR](twind_sheets.md) should be preferred. Please refer to the {@page Extract Styles aka SSR | SSR guide} for more details.

> ❗ This is an experimental feature and only supported for Node.JS >=12. Use with care and please [report any issue](https://github.com/tw-in-js/twind/issues/new) you find.
> Consider using the synchronous API when ever possible due to the relatively expensive nature of the [promise introspection API](https://docs.google.com/document/d/1rda3yKGHimKIhg5YeoAmCOtyURgsbTH_qaYR79FELlk/edit) provided by V8.
> Async server side rendering is implemented using [async_hooks](https://nodejs.org/docs/latest-v14.x/api/async_hooks.html). Callback-based APIs and event emitters may not work or need special handling.

```js
import { setup } from 'twind'
import { asyncVirtualSheet, getStyleTag } from 'twind/server'

const sheet = asyncVirtualSheet()

setup({ ...sharedOptions, sheet })

async function ssr() {
  // 1. Reset the sheet for a new rendering
  sheet.reset()

  // 2. Render the app
  const body = await renderTheApp()

  // 3. Create the style tag with all generated CSS rules
  const styleTag = getStyleTag(sheet)

  // 4. Generate the response html
  return `<!DOCTYPE html>
    <html lang="en">
      <head>${styleTag}</head>
      <body>${body}</body>
    </html>
  `
}
```

## Table of contents

### Interfaces

- [AsyncVirtualSheet](../interfaces/twind_server.asyncvirtualsheet.md)

## References

### Storage

Re-exports: [Storage](../interfaces/twind_sheets.storage.md)

___

### StyleTagProperties

Re-exports: [StyleTagProperties](../interfaces/twind_sheets.styletagproperties.md)

___

### StyleTagSheet

Re-exports: [StyleTagSheet](twind_sheets.md#styletagsheet)

___

### VirtualSheet

Re-exports: [VirtualSheet](../interfaces/twind_sheets.virtualsheet.md)

___

### getStyleTag

Re-exports: [getStyleTag](twind_sheets.md#getstyletag)

___

### getStyleTagProperties

Re-exports: [getStyleTagProperties](twind_sheets.md#getstyletagproperties)

___

### shim

Re-exports: [shim](twind_shim_server.md#shim)

___

### virtualSheet

Re-exports: [virtualSheet](twind_sheets.md#virtualsheet)

## Functions

### asyncVirtualSheet

▸ `Const`**asyncVirtualSheet**(): [*AsyncVirtualSheet*](../interfaces/twind_server.asyncvirtualsheet.md)

**Returns:** [*AsyncVirtualSheet*](../interfaces/twind_server.asyncvirtualsheet.md)

Defined in: [src/server/index.ts:30](https://github.com/gojutin/twind/blob/8f04bb3/src/server/index.ts#L30)
