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
                  <b-form-file
                    v-model="file1"
                    :state="Boolean(file1)"
                    placeholder="Choose a file or drop it here..."
                    drop-placeholder="Drop file here..."
                  ></b-form-file>
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
                </b-form-group>
                
              </div>
              <div class="col-md-6">
                <b-tabs content-class="mt-3">
                  <b-tab title="Raw" active>
                    <div class="avatar-group">
                      <b-avatar src="https://demos.creative-tim.com/argon-dashboard-pro-bs4/assets/img/theme/team-1.jpg" class="avatar-sm rounded-circle" :size="42"></b-avatar>
                      <b-avatar src="https://demos.creative-tim.com/argon-dashboard-pro-bs4/assets/img/theme/team-2.jpg" class="avatar-sm rounded-circle" :size="42"></b-avatar>
                      <b-avatar src="https://demos.creative-tim.com/argon-dashboard-pro-bs4/assets/img/theme/team-3.jpg" class="avatar-sm rounded-circle" :size="42"></b-avatar>
                      <b-avatar src="https://demos.creative-tim.com/argon-dashboard-pro-bs4/assets/img/theme/team-4.jpg" class="avatar-sm rounded-circle" :size="42"></b-avatar>
                    </div>
                  </b-tab>
                  <b-tab title="Timeline">
                    <div class="row">
                      <div class="col-lg-10 mx-auto">
                          
                          <!-- Timeline -->
                          <ul class="timeline">
                              <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                                  <div class="timeline-arrow"></div>
                                  <span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>21 March, 2019</span>
                                  <Editor
                                    :key="form.color.length"
                                    api-key="txmq3yqvqauvnr09z7186efnnahv2gb5ql5pfpjr5xwt5ews"
                                    v-model="textVal"
                                    :init="{
                                      plugins: 'quickbars',
                                      quickbars_selection_toolbar: 'backcolor',
                                      menubar: false,
                                      toolbar: false,
                                      custom_colors: false,
                                      color_map: form.color
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
                            <div class="b-avatar-badge" style="position: absolute;right: 50%;bottom: 0;">
                              <v-swatches v-model="form.color[k]" :trigger-style="{width: '15px', height: '15px'}"></v-swatches>
                            </div>
                            <b-tooltip :target="'ava-'+k" :title="val"></b-tooltip>
                          </div>
                        </div>
                      </div>
                    </div>
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
  import VSwatches from 'vue-swatches'

  export default {
    components: {
      Editor,
      vSelect,
      InputTag,
      VSwatches
    },
    data() {
      return {
        form: {
          email: '',
          date: '',
          keyword: [],
          participant: [],
          color: []
        },
        show: true,
        textVal: '<p class="text-small mt-2 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>'
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
      addParticipant() {
        this.form.color.push('#808080');
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
