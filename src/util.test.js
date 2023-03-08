import { FilInShort, PowerInShort } from './util';

test('test FilInShort ', () => {
    let res = FilInShort(1);
    expect(res).toBe('1.00 aFIL');
    res = FilInShort(1000);
    expect(res).toBe('1.00 fFIL');
    res = FilInShort(1000000);
    expect(res).toBe('1.00 pFIL');
    res = FilInShort(1000000000000000000);
    expect(res).toBe('1.00 FIL');
});


test('test PowerInShort ', () => {
    let res = PowerInShort(1);
    expect(res).toBe('1.00 iB');
    res = PowerInShort(1024);
    expect(res).toBe('1.00 KiB');
    res = PowerInShort(1024 * 1024);
    expect(res).toBe('1.00 MiB');
    res = PowerInShort(1024 * 1024 * 1024 * 1024 * 1024 * 1024);
    expect(res).toBe('1.00 EiB');
});
