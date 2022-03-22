import { noteReducer } from './noteReducer';

describe('noteReducer', () => {
    test('returns new state after action with toggle importance', () => {
        const state = [
            {
                id: 1,
                content: 'note1',
                important: false
            },
            {
                id: 2,
                content: 'note2',
                important: false
            },
        ]

        const action = {
            type: '@note/toggle_important',
            payload: {
                id: 2
            }
        }

        const newState = noteReducer(state, action);

        expect(newState).toHaveLength(2);
        // Vamos a cambiar la 2a nota, por lo tanto el primer estado deberia ser igual
        expect(newState).toContainEqual(state[0]);
        // Que contenga casi lo mismo que la 2a nota, pero al importancia invertida
        expect(newState).toContainEqual({
            id: 2,
            content: 'note2',
            important: true
        });
    });
})