<script setup lang="ts">
import { PropType, StyleValue } from 'vue';

    defineProps({
        label: {
            type: String,
            required: true
        },
        percentage: {
            type: Number,
            default: 0
        },
        imageSrc: {
            type: String,
            default: ""
        },
        itemStyle: {
            type: Object as PropType<StyleValue>
        }
    });
</script>

<template>
    <div class="skill-group-item">
        <div id="item-info" :style="$props.itemStyle">
            <p id="label">{{$props.label}}</p>
            <img 
                :src="`src/assets/images/skills/${$props.imageSrc}`"
                alt="skills item logo" />
            
        </div>
        <div id="progress-bar-container">
            <div 
                id="progress-bar" 
                :style="{width: `${$props.percentage}%`}">
                <span id="text">{{$props.percentage}}%</span>    
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .skill-group-item {
        display: flex;
        align-items: center;
        width: 100%;
        margin: 5px 0;

        #item-info {
            display: flex;
            justify-content: flex-end;
            align-items: center;

            #label {
                font-size: 0.9em;
                font-weight: bold;
                color: var(--primary-color);
            }

            
                
                img {
                    height: 28px;
                    width: 28px;
                    margin: 0 10px;
                    object-fit: contain;
                }
            
        }

        #progress-bar-container {
            display: flex;
            flex-grow: 1;
            height: 28px;
            background-color: #e2e2e2;
            
            #progress-bar {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                background-color: var(--primary-color);

                #text {
                    font-size: 0.8em;
                    font-weight: 700;
                    color: #fff;
                }
            }
        }
    }
</style>