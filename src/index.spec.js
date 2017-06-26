/* eslint-env jest */
import factory from './index'

const Todo = id => ({ id, some: `information ${id}` })

const subState = {
  data: {
    1: Todo(1),
    20: Todo(20),
    2: Todo(2),
  },
  keys: [1, 20, 2],
  initialized: true,
}

describe('index', () => {
  const test = (reducer, state) => {
    it('should prefix actions', () => expect(reducer.add(Todo(2))).toMatchSnapshot())
    it('should prefix selectors', () => expect(reducer.get()(state)).toMatchSnapshot())
    it('should prefix reducer', () => expect(reducer(subState, reducer.remove(20))).toMatchSnapshot())
  }

  describe('currification', () => {
    describe('should works with 4 parameters, 1 function', () => {
      test(
        factory(undefined, 'id', 'api', 'todos'),
        {
          api: {
            todos: subState,
          },
        },
      )
    })

    describe('should works with 3 parameters, 2 function', () => {
      test(
        factory(undefined, 'id', 'api')('todos'),
        {
          api: {
            todos: subState,
          },
        },
      )
    })

    describe('should works with 2 parameters, 3 function', () => {
      test(
        factory(undefined, 'id')('api')('todos'),
        {
          api: {
            todos: subState,
          },
        },
      )
    })

    describe('should works with 1 parameters, 4 function', () => {
      test(
        factory(undefined)('id')('api')('todos'),
        {
          api: {
            todos: subState,
          },
        },
      )
    })
  })

  describe('with path', () => {
    test(
      factory(/* no middleware */)('id')('api')('todos'),
      {
        api: {
          todos: subState,
        },
      },
    )
  })

  describe('without path', () => {
    test(factory(/* no middleware */)('id')()('todos'), { todos: subState })
  })

  describe('with middleware', () => {
    const middleware = name => key => prefix => ctx => ({
      ...ctx,
      state: { ...ctx.state, [name]: true, key, prefix, prevCtx: ctx },
      action: { ...ctx.action, [name]: true },
    })

    test(
      factory({
        pre: [middleware('pre1')],
        post: [middleware('post1')],
      })('id')()('todos'),
      { todos: subState },
    )
  })
})
