<script setup lang="ts">
    import FilterDropdownList from "../../components/filter-dropdown/FilterDropdownList.vue";
    import ProjectItem from "../../components/projects/ProjectItem.vue";
    import { IProject } from "../../types";
    import flutterProjectsJson from "../../assets/projects_data/flutter_projects.json";

const flutterProjects = flutterProjectsJson["flutter_projects"];

</script>

<template>
    <div id="project-list-page">
        <div id="project-list-header">
            <p id="project-list-label">Project List</p>
            <div id="navigation-bar">
                <div id="navigation-list">
                    <button class="nav-item active">
                       <span id="label">All (0)</span> 
                    </button>
                    <button class="nav-item">
                        <span id="label">Recent (0)</span> 
                    </button>
                </div>
                <FilterDropdownList />
            </div>
        </div>
        <div id="project-list-content">
            <ProjectItem 
                v-for="(project, key) in flutterProjects"
                :project="project"
                :key="key" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #project-list-page {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        margin: 0 30px;

        #project-list-header {
            display: flex;
            flex-direction: column;
            border-bottom: 1px solid rgba(0, 0, 0, 0.12);

            #project-list-label {
                width: fit-content;
                margin: 50px 0 30px 0;
                font-size: 2.6em;
                font-weight: bold;
                color: var(--primary-color);
            }

            #navigation-bar {
                display: flex;
                justify-content: space-between;
                align-items: center;

                #navigation-list {
                    display: flex;
                    align-items: center;

                    .active {
                        color: var(--primary-color) !important;
                        font-weight: 600 !important;

                        &::before {
                            content: "";
                            position: absolute;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            height: 3px;
                            background-color: var(--primary-color) !important;
                        }
                    }
    
                    button.nav-item {
                        position: relative;
                        appearance: none;
                        padding: 10px 10px;
                        border: none;
                        cursor: pointer;
                        color: var(--secondar-color);
                        background-color: transparent;
    
                        &:focus {
                            outline: 0
                        }
    
                        &:hover {
                            color: var(--primary-color) !important;
                        }
    
                        .label {
                            font-size: 0.9em;
                            font-weight: bold;
                        }
                    }
                }
            }
        }

        #project-list-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            grid-template-rows: 150px;
            gap: 10px;
            margin: 40px 0;
        }
    }
</style>