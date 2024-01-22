var
	TestedClass = {
		name : 'TestedClass',
		getName() {
			return this.name;
		},

	}
;

exports.TestedClass=TestedClass;

exports.functionGetTestedClassName = ()=>
{
	const result = TestedClass.getName();
	return result;
};
