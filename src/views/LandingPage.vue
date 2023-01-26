<script lang="ts">

    import axios from 'axios'

    export default {

        data() {

            return {

                urls: {
                    getCastControlData: 'http://45.63.116.200/api/cast/control/dashboard'
                },
                castControlData: {
                    data: {
                        totalSubscriptionAmount: 0,
                        totalUsersSignUp: 0,
                        totalCastViewers: 0,
                        totalCreators: 0
                    }
                }

            }

        },
        computed: {

            getCastControlDataCount() {

              return Object.keys(this.castControlData).length

            }

        },
        methods: {
            
          async getData() {

            return await axios({

                method: 'get',
                url: this.urls.getCastControlData,

            });

          }

        },
        mounted() {

            this.getData().then((result: any) => {

                this.castControlData =  result
               
            })

        }

    }

</script>

<template>

  <h2 class="main-header text-center">Cast Control</h2>

  <div class="grid-2-column">

      <div class="card">
        <h4 class="sub-header">Subscription Revenue</h4>
        <h1>$ 

                {{ 

                    castControlData.data.totalSubscriptionAmount ?
                    castControlData.data.totalSubscriptionAmount :
                    '0' 

                }}

        </h1>
      </div>

      <div class="card">
        <h4 class="sub-header">Sign ups</h4>
        <h1> 

            {{ 

                castControlData.data.totalUsersSignUp ? 
                castControlData.data.totalUsersSignUp : 
                '0'

             }} 

        </h1>
      </div>

      <div class="card">
        <h4 class="sub-header">Viewers</h4>
        <h1> 

            {{ 

                castControlData.data.totalCastViewers ? 
                castControlData.data.totalCastViewers : 
                '0' 

            }} 

        </h1>
      </div>

      <div class="card">
        <h4 class="sub-header">Creators</h4>
        <h1> 
            {{ 

                castControlData.data.totalCreators ? 
                castControlData.data.totalCreators : 
                '0'

            }} 
        </h1>
      </div>

  </div>

</template>

<style lang="scss" scoped>

</style>

