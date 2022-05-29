<script setup lang="ts">
import { IProject } from "@/types";
import { Close } from "mdue";
import { PropType } from "vue";

defineProps({
    project: {
        type: Object as PropType<IProject>,
        required: true
    }
});

defineEmits(["on-close"]);

</script>

<template>
    <div id="project-details-container">
        <button id="close-btn" @click="$emit('on-close')">
            <Close class="icon" />
        </button>
        <div id="project-details-header">
            <div id="info-container">
                <p id="project-name">{{$props.project.projectName}}</p>
            </div>
            <div id="image-container">

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #project-details-container {
        position: absolute;
        top: 30px;
        left: 50px;
        right: 50px;
        bottom: 30px;
        padding: 0 20px;
        border-radius: 5px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.54);
        background-color: #fff;
        z-index: 10;

        #close-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            #icon {
                font-size: 1.2em;
            }
        }

        #project-details-header {
            display: flex;
            margin: 20px 10px;

            #info-container {


                #project-name {
                    font-size: 1.5em;
                    font-weight: 600;
                    color: var(--primary-color);
                }
            }

            #image-container {
                
            }
        }
    }
</style>