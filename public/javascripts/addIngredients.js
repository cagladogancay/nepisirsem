tinymce.init({
  selector: 'textarea#addIngredients',
  plugins: [
    'advlist  lists paste ' ,

  ],
  toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
    'bullist numlist outdent indent ' +
    'forecolor backcolor emoticons | help',
  menubar: false,
  width: 950,
  height: 250,
  statusbar: false,
  paste_retain_style_properties: 'color font-size',
  paste_data_images: false,
  paste_as_text: true,
});