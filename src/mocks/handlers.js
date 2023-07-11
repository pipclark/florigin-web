// src/mocks/handlers.js
import { graphql } from 'msw'
import { mockGigs } from './content'



export const handlers = [
 
  graphql.query("GetGigs", (req, res, ctx) => {
      return res(ctx.data(mockGigs));
    }),
]