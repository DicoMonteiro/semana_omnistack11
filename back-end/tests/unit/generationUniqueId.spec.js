const generationUniqueId = require('../../src/utils/generationUniqueId');

describe('Generation Unique ID', () => {
    it('should generate an unique ID', () => {
        const id = generationUniqueId();

        expect(id).toHaveLength(8);

        // expect(2+2).toBe(4);
    });

})