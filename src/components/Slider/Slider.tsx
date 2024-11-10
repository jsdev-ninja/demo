import { ReactNode, useLayoutEffect, useRef, useState } from "react";
import "./Slider.css";

interface Props<T> {
	items: Array<T>;
	itemsPerView?: number;
	minWidth?: number;
	minHeight?: number;
	orientation: "vertical" | "horizontal";
	mode: "freedom" | "items"; // move item or px
	renderItem: (data: { item: T; index: number }) => ReactNode;
}

const defaultStep = 8;

export function Slider<T>(props: Props<T>) {
	const {
		items,
		mode = "freedom",
		minWidth = 0,
		minHeight = 0,
		orientation,
		itemsPerView = 1,
		renderItem,
	} = props;

	const [position, setPosition] = useState(0);

	const [containerSize, setContainerSize] = useState({
		width: 0,
		height: 0,
	});
	const [scrollSize, setScrollSize] = useState({
		width: 0,
		height: 0,
	});

	const itemsRef = useRef<HTMLDivElement>(null);
	const sliderRef = useRef<HTMLDivElement>(null);
	const itemsRef2 = useRef<Array<HTMLDivElement | null>>([]);

	const itemRef = itemsRef2.current[0];

	const itemSize =
		orientation === "horizontal" ? itemRef?.clientWidth ?? 0 : itemRef?.clientHeight ?? 0;

	const stepSize = mode === "freedom" ? defaultStep : itemSize;

	const hasHorizontalScroll = scrollSize.width > containerSize.width;
	const hasVerticalScroll = scrollSize.height > containerSize.height;

	const hasScroll = orientation === "horizontal" ? hasHorizontalScroll : hasVerticalScroll;

	const canMoveForward =
		orientation === "horizontal"
			? scrollSize.width + position > containerSize.width
			: scrollSize.height + position > containerSize.height;

	const hasNext = (!position || canMoveForward) && hasScroll;
	const hasBack = position < 0 && hasScroll;

	function onBack() {
		setPosition((position) => Math.min(position + stepSize, 0));
	}
	function onForward() {
		let maxStepValue = 0;

		if (orientation === "horizontal") {
			maxStepValue = scrollSize.width + position - containerSize.width;
		}
		if (orientation === "vertical") {
			maxStepValue = scrollSize.height + position - containerSize.height;
		}
		setPosition((position) => position - Math.min(maxStepValue, stepSize));
	}

	useLayoutEffect(() => {
		function updateSize() {
			if (itemsRef.current) {
				setContainerSize({
					width: itemsRef.current.clientWidth,
					height: sliderRef.current?.clientHeight ?? 0,
				});
				setScrollSize({
					width: itemsRef.current.scrollWidth,
					height: itemsRef.current?.scrollHeight ?? 0,
				});
				setPosition(0);
			}
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	return (
		<div className="Slider" ref={sliderRef}>
			<div
				className="items"
				ref={itemsRef}
				id="xx"
				style={{
					flexDirection: orientation == "horizontal" ? "row" : "column",
					translate: orientation === "horizontal" ? `${position}px` : `0px ${position}px`,
				}}
			>
				{items.map((item, index) => (
					<div
						key={index}
						ref={(el) => (itemsRef2.current[index] = el)}
						className="item"
						style={{
							minHeight: minHeight + "px",
							minWidth: minWidth + "px",
							...(mode === "items" &&
								(orientation === "horizontal"
									? { width: `${100 / itemsPerView}%` }
									: { height: `${100 / itemsPerView}%` })),
						}}
					>
						{renderItem({ item, index })}
					</div>
				))}
			</div>
			{hasBack && <div onClick={onBack} className={`arrow back ${orientation}`}></div>}
			{hasNext && <div onClick={onForward} className={`arrow forward ${orientation}`}></div>}
		</div>
	);
}
