<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <div class="card">
        <div class="card-title"></div>
        <div class="card-body">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <div class="row">
              <div class="col-md-6">
                <b-form-group
                  id="input-group-1"
                  label="Title"
                  label-for="input-1"
                  description="We'll never share your email with anyone else."
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="text"
                    placeholder="Enter title"
                    required
                  ></b-form-input>
                </b-form-group>
                <div>
                  <label for="example-datepicker">Choose a date</label>
                  <b-form-datepicker id="example-datepicker" v-model="form.date" class="mb-2"></b-form-datepicker>
                </div>
                <b-form-group
                  id="input-group-1"
                  label="Title"
                  label-for="input-1"
                >
                  <!-- <b-form-file
                    v-model="file1"
                    :state="Boolean(file1)"
                    placeholder="Choose a file or drop it here..."
                    drop-placeholder="Drop file here..."
                  ></b-form-file> -->
                  <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions" @vdropzone-success="onUpload"></vue-dropzone>
                </b-form-group>
                <b-form-group
                  id="input-group-1"
                  label="Keyword"
                  label-for="input-1"
                >
                  <input-tag v-model="form.keyword"></input-tag>
                </b-form-group>
                <b-form-group
                  id="input-group-1"
                  label="Participant"
                  label-for="input-1"
                >
                  <input-tag v-model="form.participant" @input="addParticipant"></input-tag>
                  <!-- <v-select @input="addParticipant" taggable></v-select> -->
                </b-form-group>
                
              </div>
              <div class="col-md-6">
                <b-tabs content-class="mt-3">
                  <b-tab title="Raw" active>
                    <button type="button" class="btn btn-primary" @click="generateSTT">Generate Transkrip</button>
                    <div class="row">
                      <div class="col-lg-10">
                        <Editor
                          :key="indexA"
                          api-key="txmq3yqvqauvnr09z7186efnnahv2gb5ql5pfpjr5xwt5ews"
                          v-model="form.full_text"
                          :init="{
                            plugins: 'quickbars',
                            quickbars_selection_toolbar: 'backcolor',
                            menubar: false,
                            toolbar: false,
                            custom_colors: false,
                            color_map: mapColor
                          }"
                        />
                      </div>
                      <div class="col-lg-2">
                        <div class="d-flex flex-column">
                          <div style="position: relative;" v-for="(val, k) in form.participant" :key="k">
                            <b-avatar :id="'ava-'+k"></b-avatar>
                            <div class="b-avatar-badge" style="position: absolute;right: 45%;bottom: -15%;">
                              <v-swatches 
                                v-model="form.color[k]" 
                                :trigger-style="{width: '15px', height: '15px'}" 
                                :popover-x="'left'" :popover-y="'bottom'"
                                @input="addIndex"
                              >
                              </v-swatches>
                            </div>
                            <b-tooltip :target="'ava-'+k" :title="val"></b-tooltip>
                          </div>
                        </div>
                      </div>
                    </div>
                  </b-tab>
                  <b-tab title="Timeline">
                    <div class="row">
                      <div class="col-lg-12 mx-auto">
                          
                          <!-- Timeline -->
                          <ul class="timeline">
                              <li class="timeline-item bg-white rounded ml-3 p-4 shadow" v-for="(det, i) in form.detail" :key="i">
                                <div class="timeline-arrow"></div>
                                <span class="small text-gray mr-2"><i v-if="i % 2 == 0" class="far fa-smile text-success"></i><i v-else class="far fa-frown text-danger"></i></span>
                                <span class="small text-gray">{{ det.start_time }} - {{ det.end_time }}</span>
                                <Editor
                                  :key="indexA"
                                  api-key="txmq3yqvqauvnr09z7186efnnahv2gb5ql5pfpjr5xwt5ews"
                                  v-model="det.transcript"
                                  :init="{
                                    plugins: 'quickbars',
                                    quickbars_selection_toolbar: 'backcolor',
                                    menubar: false,
                                    toolbar: false,
                                    custom_colors: false,
                                    color_map: mapColor
                                  }"
                                />
                                <!-- <p class="text-small mt-2 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p> -->
                              </li>
                          </ul><!-- End -->

                      </div>
                      <div class="col-lg-2">
                        <div class="d-flex flex-column">
                          <div style="position: relative;" v-for="(val, k) in form.participant" :key="k">
                            <b-avatar :id="'ava-'+k"></b-avatar>
                            <div class="b-avatar-badge" style="position: absolute;right: 45%;bottom: -15%;">
                              <v-swatches 
                                v-model="form.color[k]" 
                                :trigger-style="{width: '15px', height: '15px'}" 
                                :popover-x="'left'" :popover-y="'bottom'"
                                @input="addIndex"
                              >
                              </v-swatches>
                            </div>
                            <b-tooltip :target="'ava-'+k" :title="val"></b-tooltip>
                          </div>
                        </div>
                      </div>
                    </div>
                  </b-tab>
                  <b-tab title="Word Cloud">
                    <img :src="form.url_wordcloud" style="width: -webkit-fill-available;" v-if="form.url_wordcloud" />
                  </b-tab>
                </b-tabs>
              </div>
            </div>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
        </div>
      </div>
    </base-header>

  </div>
</template>

<script>
  import 'vue-select/dist/vue-select.css';
  import Editor from '@tinymce/tinymce-vue';
  import vSelect from 'vue-select';
  import InputTag from 'vue-input-tag';
  import VSwatches from 'vue-swatches';
  import 'vue-swatches/dist/vue-swatches.css';
  import vue2Dropzone from 'vue2-dropzone';
  import 'vue2-dropzone/dist/vue2Dropzone.min.css';

  export default {
    components: {
      Editor,
      vSelect,
      InputTag,
      VSwatches,
      vueDropzone: vue2Dropzone
    },
    computed: {
      color() {
        return this.form.color;
      }
    },
    watch: {
      color(newVal) {
        let data = [];
        
        if (newVal) {
          newVal.forEach((val, k) => {
            data.push(val, 'black');
          })
          console.log('newVal', data);
        }

        this.mapColor = data;
      },
    },
    data() {
      return {
        form: {
          title: '',
          detail: [],
          start_at: '',
          keyword: [],
          participant: [],
          color: [],
          full_text: "",
          audio: null,
          most_occur: null,
          url_wordcloud: null
        },
        indexA: 0,
        mapColor: [],
        show: true,
        dropzoneOptions: {
            url: 'http://127.0.0.1:8000/api/upload',
            thumbnailWidth: 150,
            maxFilesize: 10,
        },
        classObject: {
          active: true,
          'text-danger': false
        }
      };
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      addParticipant(val) {
        console.log(val)
        this.form.color.push('#808080');
        // this.form.participantColor.push('#808080');
        // setTimeout(this.addIndex(), 300);
      },
      addIndex(color) {
        console.log(color);
        this.indexA++;
      },
      onUpload(file,event) {
        if (event.status) {
          this.form.audio = event.audio_url;
        }
      },
      generateSTT() {
        console.log('form', this.form);
        this.axios.post("http://127.0.0.1:8000/api/transkip", {
          url: "gs://ringkas-semedi/20221219_ringkas_63a0a45d2d055.wav",
          // url: this.form.audio.trim(),
        })
        .then((response) => {
          if (response.data.status) {
            this.form.full_text = response.data.data.full_text;
            this.form.detail = response.data.data.detail;
            this.form.most_occur = response.data.data.most_occur;
            this.form.url_wordcloud = response.data.data.url_wordcloud;
          }
        })
        .catch((err) => {
          console.log(err);
        })
      },
      dummySentiment(i) {
        if (i % 2) {
          return {
            "far fa-smile": true,
            "text-success": true,
          }
        } else {
          return {
            "far fa-frown": true,
            "text-danger": true,
          }
        }
      }
    },
  };
</script>
<style>
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}
/* Timeline holder */
ul.timeline {
    list-style-type: none;
    position: relative;
    padding-left: 1.5rem;
}

 /* Timeline vertical line */
ul.timeline:before {
    content: ' ';
    background: #fff;
    display: inline-block;
    position: absolute;
    left: 16px;
    width: 4px;
    height: 100%;
    z-index: 400;
    border-radius: 1rem;
}

li.timeline-item {
    margin: 20px 0;
}

/* Timeline item arrow */
.timeline-arrow {
    border-top: 0.5rem solid transparent;
    border-right: 0.5rem solid #fff;
    border-bottom: 0.5rem solid transparent;
    display: block;
    position: absolute;
    left: 2rem;
}

/* Timeline item circle marker */
li.timeline-item::before {
    content: ' ';
    background: #ddd;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 3px solid #fff;
    left: 11px;
    width: 14px;
    height: 14px;
    z-index: 400;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
</style>
