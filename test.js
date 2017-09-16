import test from "ava";
import editDistance from "./";

test(`Edit distance between "jelly" and "fully" should be 2`, (t) => {
	t.is(editDistance("jelly", "fully"), 2);
});

test(`Edit distance between "fully" and "jelly" should be 2`, (t) => {
	t.is(editDistance("fully", "jelly"), 2);
});

test(`Edit distance between "cars" and "girls" should be 3`, (t) => {
	t.is(editDistance("cars", "girls"), 3);
});

test(`Edit distance between the same string should be 0`, (t) => {
	t.is(editDistance("fully", "fully"), 0);
});

test(`Edit distance between an empty string and a string should be a string length`, (t) => {
	t.is(editDistance("", "fully"), 5);
});

test(`Edit distance between an empty string and a string should be a string length`, (t) => {
	t.is(editDistance("fully", ""), 5);
});

test(`Works the same way with arrays`, (t) => {
	t.is(editDistance(["f", "u", "l", "l", "y"], ["j", "e", "l", "l", "y"]), 2);
});

test(`Works the same way with arrays`, (t) => {
	t.is(editDistance(["l"], ["j", "e", "l", "l", "y"]), 4);
});

test(`Case sensitive`, (t) => {
	t.is(editDistance("Case", "case"), 1);
});