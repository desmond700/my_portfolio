<script setup lang="ts">
    import { PropType, ref } from 'vue';
    import { IProject } from '@/types';
    import ProjectDetails from "../../views/project/ProjectDetails.vue";
    import Overlay from "../Overlay.vue";

    defineProps({
        project: {
            type: Object as PropType<IProject>,
            required: true
        }
    });

    const toggleProjectDetails = ref(false);

</script>

<template>
    <div
        class="project-item" 
        @click="toggleProjectDetails = !toggleProjectDetails">
        <div id="image-container">

        </div>
        <div id="project-item-content">
            <p id="project-name">{{$props.project.projectName}}</p>
            <p id="project-description">
                {{$props.project.description}}
            </p>
            <div id="language-list">
                <router-link 
                    class="tag" 
                    v-for="(technology, key) in $props.project.technologies"
                    :to="{
                        path: 'projects', 
                        query: {tag: technology}
                    }"
                    :key="key">
                    {{technology}}
                </router-link>
            </div>
            <p id="project-created">Created</p>
        </div>

        <Teleport to="body">
            <Overlay 
                v-if="toggleProjectDetails">
                <ProjectDetails 
                    :project="$props.project"
                    @on-close="toggleProjectDetails = false" />
            </Overlay>
        </Teleport>
    </div>
</template>

<style lang="scss" scoped>
    .project-item {
        display: flex;
        border: 1px solid rgba(0, 0, 0, 0.12);
        box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.356);
        border-radius: 4px;
        text-decoration: none;
        cursor: pointer;
        overflow: hidden;

        &:hover {
            box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.356);
        }

        #image-container {
            flex-shrink: 0;
            width: 100px;
            background-color: var(--primary-color);
        }

        #project-item-content {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            padding: 5px 8px;
            background-color: #fff;

            #project-name, 
            #project-description, 
            #project-created {
                text-align: left;
                color: var(--primary-color);
            }

            #project-name {
                margin-bottom: 4px;
                font-size: 1.1em;
                font-weight: 600;
            }

            #project-description {
                display: -webkit-box;
                margin-bottom: 4px;
                max-lines: 3;
                font-size: 0.8em;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }

            #language-list {
                display: flex;
                flex-wrap: wrap;
                max-width: 100%;
                margin-bottom: 3px;

                .tag {
                    font-size: 0.8em;
                    font-weight: 600;
                    color: var(--secondary-color);
                    margin: 0 2px;
                    text-decoration: none;

                    &::before {
                        content: "#"
                    }

                    &:hover {
                        color: var(--primary-color);
                    }
                }
            }

            #project-created {
                margin-top: auto;
                font-size: 0.8em;
                font-weight: 600;
            }
        }
    }
</style>