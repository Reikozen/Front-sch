<template>
     <div>
          <div class="text-left p-5 ">
               <form action="#" method="post">
                    <div class="form-group">
                      <label for="">Title</label>
                      <input type="text" name="title"  class="form-control w-lg-75" placeholder="Title" aria-describedby="title">
                    </div>
                    <div class="form-group">
                      <label for="">Tag</label>
                         <select class="form-control w-lg-25" name="tag">
                              <option value="volvo">Volvo</option>
                              <option value="saab">Saab</option>
                              <option value="mercedes">Mercedes</option>
                              <option value="audi">Audi</option>
                         </select>
                    </div>
                    <div class="form-group">
                      <label for="">Content</label>
                      <ckeditor class="document-editor" :editor="editor" ></ckeditor>
                    </div>
                    <!-- name="content" placeholder="Insert Content Here.." -->
                    
               </form>
         </div>
     </div>
</template>

<script>

import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {

    name:'Insert',
    components:{
         ckeditor : CKEditor.component
    },
    data(){
         return{
              editor: ClassicEditor,
              editorConfig:{
                    removePlugins: [ 'Bold' ],
                    toolbar: [ 'heading', '|',  'italic', 'link','|', 'bulletedList', 'numberedList', 'blockQuote' ],
              }
         };
    }
}
</script>

<style>
@media (min-width: 768px) {
     document-editor{
          width: 200px;
     }
}
</style>