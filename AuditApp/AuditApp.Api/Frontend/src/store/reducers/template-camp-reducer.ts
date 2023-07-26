import {
    TemplateAction,
    TemplateActionType,
    TemplateAll,
    TemplateItemGroup,
} from "../../types/template";

const initialState: TemplateAll = {
    template: [
        {
            id: 1,
            title: "Сайт лагеря",
            order: 1,
            TemplateGroup: [
                {
                    id: "1",
                    title: "На сайте лагеря не указаны условия проживания для детей",
                    description:
                        "На сайте лагеря не указаны условия проживания для детей.",
                    order: 1,
                    isActive: false,
                },
                {
                    id: "2",
                    title: "На сайте нет информации о ценах путёвок",
                    description: "На сайте нет информации о ценах путёвок.",
                    order: 2,
                    isActive: false,
                },
                {
                    id: "3",
                    title: "В футере сайта лагеря нет контактных данных.",
                    description: "В футере сайта лагеря нет контактных данных",
                    order: 3,
                    isActive: false,
                },
            ],
        },
    ],
};

export const templateCampReducer = (
    state = initialState,
    action: TemplateAction
): TemplateAll => {
    switch (action.type) {
        case TemplateActionType.FETCH_TEMPLATE:
            return { ...state, template: action.payload };
        case TemplateActionType.UPDATE_TEMPLATE:
            return { ...state, template: action.payload };
        case TemplateActionType.CLEAR_TEMPLATE:
            return { ...state, ...initialState };
        default:
            return state;
    }
};
