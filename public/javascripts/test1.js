import assert from 'assert';

const mock = impl => {
    const mockFn = (...args) => {
        mockFn.calls.push(args);
        return impl ? impl(...args) : undefined;
    };

    mockFn.calls = [];
    mockFn.reset = () => mockFn.calls = [];

    return mockFn;
};

// TESTS AND USAGE

// Supports simple standard mocking (mockA())
// or mocking with provided implementation (mockB(...args)),
// Mock implementation arguments can also be provided:
// mock((a, b) => a + b);
// or even
// mock((...args) => args);
const mockA = mock();
const mockB = mock(() => 'mock implementation');

mockA();
mockA('firstParam', 'secondParam');

// Should track how many times it's been called
assert(mockA.calls.length === 2);

// Should track provided arguments
assert(mockA.calls[0][0] === undefined);
assert(mockA.calls[1][0] === 'firstParam');
assert(mockA.calls[1][1] === 'secondParam');

// Should reset properly
mockA.reset();
assert(mockA.calls.length === 0);

// Should work as expected even after resetting
mockA();
assert(mockA.calls.length === 1);

// Should return the mock implementation every time it's called
assert(mockB() === 'mock implementation');
assert(mockB('paramA', 25) === 'mock implementation');

// Should still track calls even when provided with mock implementation
assert(mockB.calls.length === 2);

// Should still track arguments even when provided with mock implementation
assert(mockB.calls[0][0] === undefined);
assert(mockB.calls[1][0] === 'paramA');
assert(mockB.calls[1][1] === 25);

// Should work after resetting even when provided with mock implementation
mockB.reset();
assert(mockB('param') === 'mock implementation');
assert(mockB.calls.length === 1);
assert(mockB.calls[0][0] === 'param');