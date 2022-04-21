<template>
    <div id="navbar">
        <div id="navheading">
            <div id="navImgContainer">
                <div class="logo-outer-border">
                    <div id="logo">
                        <img src="https://triosdevelopers.com/~D.Wallace/assets/images/15027583_1430471596982184_305908304077287745_n.jpg" class="img-fluid" />
                    </div>
                </div>
            </div>

            <div>
                <p id="name">Desmond Wallace</p>
                <div class="horizontal-divider"></div>
                <p id="career">Application Developer</p>
            </div>
        </div>
        <div class="social-media">
            <a href="https://github.com/desmond700" target="_blank" class="social-media-icon">
                <i class="fab fa-github"></i>
            </a>
            <a href="#" target="_blank" class="social-media-icon">
                <i class="fab fa-facebook-f"></i> 
            </a>
            <a href="https://www.linkedin.com/in/desmond-wallace-23a8ba122/" target="_blank" class="social-media-icon">
                <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/desmond_700/" target="_blank" class="social-media-icon">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="mailto:dwdeveloper4@gmail.com" class="social-media-icon">
                <i class="fas fa-envelope"></i>
            </a>
        </div>
        <div id="navlist">
            <div ref="navIndicator" id="nav-item-indicator"></div>
            <div class="list-item">
                <router-link class="routerlink" :to="{name: 'about'}" data-position="0" @click="navItemSelection($event)">
                    <span class="label">About</span>
                </router-link>
            </div>
            <div class="list-item">
                <router-link class="routerlink" :to="{name: 'skills'}" data-position="1" @click="navItemSelection($event)">
                    <span class="label">Skills</span>
                </router-link>
            </div>
            <div class="list-item">
                <router-link class="routerlink" :to="{name: 'projects'}" data-position="2" @click="navItemSelection($event)">
                    <span class="label">Projects</span>
                </router-link>
            </div>
            <div class="list-item">
                <router-link class="routerlink" :to="{name: 'resume'}" data-position="3" @click="navItemSelection($event)">
                    <span class="label">Resume</span>
                </router-link>
            </div>
            <div class="list-item">
                <router-link class="routerlink" :to="{name: 'contact'}" data-position="4" @click="navItemSelection($event)">
                    <span class="label">Contact</span>
                </router-link>
            </div>
        </div>
        <!--<div id="footer">
            <div>
                <img src="@/assets/logo.png" width="40" height="auto" />
            </div>
            <div>
                <p>Copyright&copy; 2020</p>
            </div>
        </div>-->
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import { RouterOptions, useRoute } from 'vue-router';

export default defineComponent({
    name: "Navigation-Bar",
    setup() {
        let route = useRoute();
        let navItem: object = { event:{}, pos:0};
        let showNav         = ref<boolean>();
        let navIndicator    = ref<HTMLDivElement>();
        let clientWidth     = window.innerWidth;
        const transitionName: string = 'slide-left';
        const colors: any = {
            about: { primary:'#1a4a70', secondary:'#5f809b' },
            skills: { primary:'#385faa', secondary:'#748fc4' },
            projects: { primary:'#3594cb', secondary:'#72b4db' },
            resume: { primary:'#CD6155', secondary:'#dc9088' },
            contact: { primary:'#1a586b', secondary:'#5f8a97' }
        };

        if(clientWidth <= 992){
            showNav.value = false;
        }

        function navItemSelection(event: Event): void {
            const target = event.target as HTMLElement;

            const { width, height } = target.getBoundingClientRect();
            console.log("width", width);
            console.log("height", height);
            const parent = target.closest("#navlist");
            console.log("parent: ", parent);
            console.log("target.offsetTop: ", target.offsetTop);
            const indicator = navIndicator.value;
            console.log("indicator: ", indicator);
            let root        = document.documentElement
            let links       = document.querySelector('.router-link-active') as HTMLElement;
            // let routeNavPos = route.meta.routeNavPos as number;
            // let el          = links[routeNavPos].firstChild as HTMLElement;
            let type        = route.matched[0].name as string;
            
            if (navIndicator.value !== undefined) {
                navIndicator.value.style.transform = `translateY(${target.offsetTop}px)`
                // navIndicator.value.style.height = height+'px';
                navIndicator.value.style.width = width+'px';
                navIndicator.value.style.backgroundColor = colors[type].primary
                root.style.setProperty('--primary-color', colors[type].primary);
                root.style.setProperty('--secondary-color', colors[type].secondary)
            }
            // console.log("active link: ", links);
        }

        watch(() => route.name, (routeName) => {
            console.log("routeName: ", routeName);
            // navItemSelection();
        });

        onMounted(() => {
            //if(route.meta.routeNavPos){
                // navItemSelection();
            //}
        })

        return { navIndicator, navItemSelection }
    },
})
</script>
<style lang="scss" scoped>

    p{
        margin: 0px;
    }
    
    p#name{
        /*color: #224da1;*/
        color: var(--primary-color);
        font-weight: 600;
        font-size: 1.1em;
    }
    .horizontal-divider{
        flex-shrink: 1;
        flex-grow: 0;
        height: 1px;
        width: 80%;
        background-color: var(--primary-color);
        // border-bottom: 2px solid rgb(180, 176, 176);
        margin: 0 auto;
    }
    p#career{
        color: var(--secondary-color);
        font-weight: 600;
        font-style: normal;
        font-size: .9em;
    }
    
    #navbar{
        position: relative;
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        flex-grow: 0;
        width: 250px;
        padding: 10px 0 20px 0;
        padding-top: 20px;
        height: 100%;
        /*background-color: #3594cb;*/
        scrollbar-width: thin;
        scrollbar-color: var(--primary-color) var(--secondary-color);
        border-right: 2px solid var(--primary-color);
        box-shadow: 0px calc(100vh-10px) 5px #000;
        overflow-y: auto;
        overflow-x: hidden;
        transition: all .4s ease;
        z-index: 5;

        &::-webkit-scrollbar {
            width: .5em;
        }

        &::-webkit-scrollbar-thumb{
            background-color: var(--secondary-color);
            border-radius: 10px;
        }

        #navheading{
            display: flex;
            flex-direction: column;
            flex-grow: 0;
            z-index: 2;

            #navImgContainer{
                display: flex;
                flex-grow: 0;
                flex-shrink: 1;
                margin-bottom: 20px;

                .logo-outer-border{
                    display: flex;
                    height: 160px;
                    width: 160px;
                    margin: auto;
                    padding: 1px;
                    border-radius: 50%;
                    border: 1px solid var(--primary-color);
                    background: var(--primary-color);
                    box-shadow: 0 2px 6px #000;

                    #logo{
                        height: 100%;
                        width: 100%;
                        border-radius: 50%;
                        margin: auto;
                        overflow: hidden;
                        /*background-image: url('../../assets/SVG/Asset 2.svg');
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: contain;*/
                    }
                }
            }
        }

        div.social-media {
            display: flex;
            justify-content: space-between;
            align-items: center;
            // width: 100%;
            padding: 20px 10px;

            .social-media-icon{
                display: flex;
                width: 22px;
                height: 22px;
                padding: 5px;
                // margin: 0 20px;
                background-color: #fff;
                color: var(--primary-color);
                border-radius: 4px;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

                &:hover{
                    background-color: var(--primary-color);
                    text-decoration: none;

                    i{
                        color: #fff;
                    }
                }

                i{
                    margin: auto;
                }
            }
        }

        div#navlist{
            position: relative;
            flex-grow: 1;
            flex-shrink: 0;
            margin:  0 -10px;

            #nav-item-indicator{
                position: absolute;
                height: 28px;
                top: 3px;
                right: -1px;
                background-color: #3594cb;
                border-top-left-radius: 17px;
                border-bottom-left-radius: 17px;
                /*box-shadow: inset 2px 0 5px rgb(44, 43, 43);*/
                transition: all .4s ease-in-out;
            }

            .list-item {
                display: flex;
                justify-content: flex-end;
                padding: 0;
                text-align: left;
                border: none;
                background-color:transparent;

                a {
                    width: fit-content;
                    text-decoration: none;
                    font-size: 1.3em;
                    text-align: right;
                    border: 3px solid transparent;
                    z-index: 16;

                    &:hover{
                        text-decoration: none;
                    }
                    
                    &:not(.router-link-active){

                        span.label {
                            &:hover{
                                color: var(--primary-color);
                            }
                        }
                    }

                    span.label {
                        font-size: 0.85em;
                        // border-bottom: 3px solid transparent;
                        color: var(--secondary-color);
                        transition: color .3s linear;
                    }
                }
            }
        }

    }
    
    
    
    .routerlink{
        display: block;
        // margin: 0 1px;
        // padding: .30rem 0px;
        font-size: 1.3em;
        text-align: right;
        border: 2px solid transparent;
        z-index: 16;

        &:hover{
            text-decoration: none;
        }
        
        &:not(.router-link-active){

            span{
                &:hover{
                    color: var(--primary-color);
                }
            }
        }

        span{
            height: 100%;
            margin: 0 -1px;
            padding: .40rem 13px;
            border-bottom: 3px solid transparent;
            color: var(--secondary-color);
            transition: color .3s linear;
        }
    }
    
    
    .router-link-active{
        /*-moz-box-shadow:    0 8px 6px -6px #000;
        -webkit-box-shadow: 0 8px 6px -6px #000;
        box-shadow:         0 8px 6px -6px #000;*/
        // color: #fff;
        width: 100%;
        /*font-weight: 600;*/
        /*border-bottom: 1px solid #1d74a7;*/

        span.label {
            /*background-color: #3594cb;*/
            color: #fff !important;
        }
    }

    #footer{
        display: flex;
        flex-grow: 0;
        flex-shrink: 1;
        height: 50px !important;
        padding: 10px 5px;
        margin-top: auto;
        margin-left: -10px !important;
        margin-right: -10px !important;
        border-top: 1px solid rgb(206, 203, 203);
        background-color: var(--primary-color);

        &:first-child{
            margin: auto 0;

            img{
                margin: auto 0;
            }
        }

        &:last-child{
            flex-grow: 1;
            margin: auto 0;
            color: #3594cb;

            p{
                margin: auto 0;
                padding: 0 5px;
                text-align: left;
            }
        }
    }
</style>