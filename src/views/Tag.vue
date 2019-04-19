<template>
    <div>
        <!-- <h1>Menampilkan Berita : {{ caps(tagname) }}</h1>
        <hr> -->
        <div class="row border-between py-5">
            <!-- Content -->
            <div class="col-sm-8 col-xs-12">
                <div class="artikel-list border mb-3" v-for="item in variable" :key="item.id">
                    <div class="w-100 border-bottom">
                        <h1 class="display-5">{{ item.title }}</h1>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <img :src="item.image" class="w-100">
                        </div>
                        <div class="col-9">
                            {{ item.content }}
                            <a :href=" item.link " class="btn btn-primary">Read More >></a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Content -->
            <!-- SideBar -->
            <div class="col-sm-4 col-xs-12 sidebar">
                <div class="artikel-list border mb-3" v-for="item in variable" :key="item.id">
                    <div class="w-100 border-bottom">
                        <img :src="item.image" class="w-100">
                    </div>
                    <small>55d</small>
                    <h3>{{ item.title }}</h3>
                    <div class="">
                        {{ item.content }}
                        <a :href=" item.link " class="btn btn-primary">Read More >></a>
                    </div>
                </div>
            </div>
            <!-- SideBar -->
        </div>
    </div>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    tagname: String
  },
  data(){
    return {
            variable:[
            {
                title: 'bebas',
                content: 'ini content',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
                link: 'ini link'
            },
            {
                title: 'bebas2',
                content: 'ini content',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
                link: 'ini link'
            }
        ],
    }
  },
  methods:{
      caps: function(text){
          return text.charAt(0).toUpperCase() + text.slice(1)
      }
  }
  
}
</script>
<style>
.border-between > [class*='col-']:before {
   background: #e3e3e3;
   bottom: 0;
   content: " ";
   left: 0;
   position: absolute;
   width: 1px;
   top: 0;
}

.border-between > [class*='col-']:first-child:before {
   display: none;
}
</style>
