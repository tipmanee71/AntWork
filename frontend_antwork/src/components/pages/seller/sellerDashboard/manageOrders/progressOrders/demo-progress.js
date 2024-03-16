import React from "react";
import { Controller, useForm } from "react-hook-form"; 
import { Stack, Typography, TextField, Button, Slider } from "@mui/material";
import Card from "./Card";
import dayjs from "dayjs";
import "dayjs/locale/th";

import maintenanceService from "../../../../../../services/maintenance.service";

const Item = ({data}) => {
	return (
		<Card title={dayjs(data.createdAt).locale('th').format("DD MMMM YYYY")} subTitle={dayjs(data.createdAt).locale('th').format("(HH.mm น.)")}>
			<Typography>{data.text}</Typography>
		</Card>
	)
}

const AddDelivery = ({maintenanceId, progress, onAddNewProgressReport}) => {
	const { register, control, getValues, setValue, handleSubmit, formState: { errors }, reset } = useForm({
		defaultValues: {
			progressPercent: 0,
		}
	})

	const updateProgressPercent = (value) => {
		let newValue = getValues("progressPercent") + value;

		if(newValue < 0){
			setValue("progressPercent", 0);
		}
		else if(newValue > 100){
			setValue("progressPercent", 100);
		}
		else{
			setValue("progressPercent", newValue);
		}
	}

	const onSubmit = (data) => {
		maintenanceService.newProgressReport({
			maintenanceId: maintenanceId,
			text: data.progressText,
			addPercent: data.progressPercent,
		}).then(res => {
			// console.log(res.data.data);
			onAddNewProgressReport(res.data.data)
			// progress = res.data.data.progress;
			reset();
		})
		console.log(data);
	}

	return (
		<Card style={{marginBottom: 16}}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Stack spacing={2} >
					<TextField inputProps={{...register("progressText", { required: true })}} helperText={errors.progressText? "กรุณากรอกข้อมูลให้ถูกต้อง": false} error={errors.progressText? true: false} placeholder="รายงานความคืบหน้า..." fullWidth rows={4} multiline/>
					<Stack direction="row" justifyContent="space-between" alignItems="center">
						<Stack>
							<Controller 
								control={control}
								name="progressPercent"
								render={({field})=>(
									<>
										<Typography  component={'span'}   style={{width: 220}}>เพิ่มเปอร์เซนต์ความคืบหน้า {getValues("progressPercent")}%</Typography>
										<Slider {...field} defaultValue={0} step={5} marks min={0} max={100-progress} disabled={progress===100? true: false}/>
									</>
								)}
							/>
							{/* <Stack direction="row" alignItems="center" spacing={1}>
								<Button variant="outlined" size="small" onClick={()=>{updateProgressPercent(-10)}}>-10</Button>
								<Button variant="outlined" size="small" onClick={()=>{updateProgressPercent(-1)}}>-1</Button>
								<Button variant="outlined" size="small" onClick={()=>{updateProgressPercent(1)}}>+1</Button>
								<Button variant="outlined" size="small" onClick={()=>{updateProgressPercent(10)}}>+10</Button>
							</Stack> */}
						</Stack>
						<Button variant="contained" type="submit">โพสต์</Button>
					</Stack>
				</Stack>
			</form>
		</Card>
	)
}

const Delivery = ({data, isAdmin, progress, maintenanceId, onAddNewProgressReport}) => {
	return(
		<Stack spacing={2}>
			{isAdmin && <AddDelivery maintenanceId={maintenanceId} progress={progress} onAddNewProgressReport={onAddNewProgressReport}/>}
			{data?.length === 0 && <Typography textAlign="center">ยังไม่พบความคืบหน้าใดๆ</Typography>}
			{data?.map((d, i)=>(
				<Item key={`delivery_${i}`} data={d}/>
			))}
		</Stack>
	)
}

export default Delivery;