import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://northwind.vercel.app/api/' }),
    tagTypes: ['Categories', 'Category'],
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: () => 'categories',
            providesTags: ['Categories']
        }),
        getCategoryById: builder.query({
            query: (id) => `categories/${id}`,
        }),
        deleteCategoryById: builder.mutation({
            query: (id) => ({
                url: `categories/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Categories']
        }),
        addCategory: builder.mutation({
            query: (newCategory) => ({
                url: 'categories',
                method: 'POST',
                body: newCategory
            }),
            invalidatesTags: ['Categories']
        }),
        editCategoryById: builder.mutation({
            query: ({ id, updatedCategory }) => ({
                url: `categories/${id}`,
                method: 'PUT',
                body: updatedCategory
            }),
            invalidatesTags: ['Categories']
        })
    })
})


export const { useGetAllCategoriesQuery, useGetCategoryByIdQuery, useDeleteCategoryByIdMutation, useAddCategoryMutation, useEditCategoryByIdMutation } = categoryApi 