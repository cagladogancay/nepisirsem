  
FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode,
  )
  
  FilePond.setOptions({
    stylePanelAspectRatio: 300 / 600,
    imageResizeTargetWidth: 600,
    imageResizeTargetHeight: 300,
/*     stylePanelLayout:"compact circle" */
  })
  
  FilePond.parse(document.body);