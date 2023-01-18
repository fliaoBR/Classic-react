import * as React from "react";
import { useSearchParams } from "react-router-dom";

export default function withSearchParams(Component) {
	return function ComponentWithSEarchParams(props) {
		const [searchParams] = useSearchParams();

		return <Component {...props} router={{ searchParams }} />;
	};
}
