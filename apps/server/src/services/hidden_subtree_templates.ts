import { HiddenSubtreeItem } from "@triliumnext/commons";
import { t } from "i18next";

export default function buildHiddenSubtreeTemplates() {
    const templates: HiddenSubtreeItem = {
        id: "_templates",
        title: t("hidden_subtree_templates.built-in-templates"),
        type: "book",
        children: [
            {
                id: "_template_text_snippet",
                type: "text",
                title: t("hidden_subtree_templates.text-snippet"),
                icon: "bx-align-left",
                attributes: [
                    {
                        name: "template",
                        type: "label"
                    },
                    {
                        name: "textSnippet",
                        type: "label"
                    },
                    {
                        name: "label:textSnippetDescription",
                        type: "label",
                        value: `promoted,alias=${t("hidden_subtree_templates.description")},single,text`
                    }
                ]
            },
            {
                id: "_template_list_view",
                type: "book",
                title: t("hidden_subtree_templates.list-view"),
                icon: "bx bx-list-ul",
                attributes: [
                    {
                        name: "template",
                        type: "label"
                    },
                    {
                        name: "collection",
                        type: "label"
                    },
                    {
                        name: "viewType",
                        type: "label",
                        value: "list"
                    }
                ]
            },
            {
                id: "_template_grid_view",
                type: "book",
                title: t("hidden_subtree_templates.grid-view"),
                icon: "bx bxs-grid",
                attributes: [
                    {
                        name: "template",
                        type: "label"
                    },
                    {
                        name: "collection",
                        type: "label"
                    },
                    {
                        name: "viewType",
                        type: "label",
                        value: "grid"
                    }
                ]
            },
            {
                id: "_template_calendar",
                type: "book",
                title: t("hidden_subtree_templates.calendar"),
                icon: "bx bx-calendar",
                attributes: [
                    {
                        name: "template",
                        type: "label",
                    },
                    {
                        name: "collection",
                        type: "label"
                    },
                    {
                        name: "viewType",
                        type: "label",
                        value: "calendar"
                    },
                    {
                        name: "hidePromotedAttributes",
                        type: "label"
                    },
                    {
                        name: "label:startDate",
                        type: "label",
                        value: `promoted,alias=${t("hidden_subtree_templates.start-date")},single,date`,
                        isInheritable: true
                    },
                    {
                        name: "label:endDate",
                        type: "label",
                        value: `promoted,alias=${t("hidden_subtree_templates.end-date")},single,date`,
                        isInheritable: true
                    },
                    {
                        name: "label:startTime",
                        type: "label",
                        value: `promoted,alias=${t("hidden_subtree_templates.start-time")},single,time`,
                        isInheritable: true
                    },
                    {
                        name: "label:endTime",
                        type: "label",
                        value: `promoted,alias=${t("hidden_subtree_templates.end-time")},single,time`,
                        isInheritable: true
                    }
                ]
            },
            {
                id: "_template_table",
                type: "book",
                title: t("hidden_subtree_templates.table"),
                icon: "bx bx-table",
                attributes: [
                    {
                        name: "template",
                        type: "label"
                    },
                    {
                        name: "collection",
                        type: "label"
                    },
                    {
                        name: "viewType",
                        type: "label",
                        value: "table"
                    }
                ]
            },
            {
                id: "_template_geo_map",
                type: "book",
                title: t("hidden_subtree_templates.geo-map"),
                icon: "bx bx-map-alt",
                attributes: [
                    {
                        name: "template",
                        type: "label"
                    },
                    {
                        name: "collection",
                        type: "label"
                    },
                    {
                        name: "viewType",
                        type: "label",
                        value: "geoMap"
                    },
                    {
                        name: "hidePromotedAttributes",
                        type: "label"
                    },
                    {
                        name: "label:geolocation",
                        type: "label",
                        value: `promoted,alias=${t("hidden_subtree_templates.geolocation")},single,text`,
                        isInheritable: true
                    }
                ]
            }
        ]
    };

    return templates;
}
