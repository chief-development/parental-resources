import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = {
  p: {
    left: "23%",
    textAlign: "left", // set the text to the center
    fontSize: "19px", // set size font of the letters
    margin: "0px", // set margin
    paddingTop: "20px" // set padding for the top
  }
};

function HomePage(props) {
  const { classes } = props;
  return (
    <div>
      <h1
        style={{
          //style for the header of the home page
          lineHeight: "1",
          letterSpacing: "-2px", // space between letters of -2 px
          padding: "5px", // padding around of 5 px
          fontSize: "80px", // size of the font 80 px
          color: "#b3a272", //color mustard yellow for the letters
          textShadow: "0px 2px 3px #555", // give a little shadow to the letters
          textAlign: "center", // text set to the center
          flex: "1"
        }}
      >
        Insurance
      </h1>

      <hr
      //separation line
      />

      <p
        className={classes.p}
        style={{
          //style for the paragraph

          paddingTop: "40px" // set padding for the top
        }}
      >
        Participation in intercollegiate athletics involves the inherent risk of
        injury. For this reason, it remains necessary for all student-athletes
        to maintain a personal health insurance policy. This policy must remain
        in effect throughout the entire school year, thus covering all in-season
        and out-of-season training, practices, and competitions.
      </p>
      <p className={classes.p}>
        Students will not be allowed to participate in any team activity or
        training until proof of insurance is provided to the athletic training
        department and the acknowledgement form is completed by the policy
        holder.It is highly recommended the student-athlete's health insurance
        policy has a reasonable deductible, as this may be the responsibility of
        the student-athlete and/or policy holder.Furthermore, this policy must
        meet the following criteria:
      </p>

      <p className={classes.p}>
        (1) Coverage of interscholastic athletic-related accidents <br /> (2)
        Coverage in the state of Missouri <br /> *Out-of-state student-athletes
        with health insurance that only covers emergencies in the state of
        Missouri may need to return home, at their own expense, for
        non-emergency, elective medical care. While the university does retain a
        secondary insurance policy for student-athletes, it must be understood
        that necessary steps may need to be taken to ensure the primary
        insurance policy is properly utilized and fully exhausted prior to
        receiving benefits from the secondary. In addition, if it is determined
        that a student-athlete incurred out-of-network expenses not covered by
        his/her primary insurance due to lack of coverage, benefits from the
        secondary insurance policy may not be available.
      </p>
      <p className={classes.p}>
        In addition to the specific criteria stated above: <br /> (1)
        Out-of-state Medicaid plans DO NOT meet Lindenwood University Athletics
        requirements.
      </p>
      <p className={classes.p}>
        Secondary Insurance Information (provided by the university) <br /> The
        university's secondary insurance policy is limited to those injuries
        received, which in the opinion of the team physician and certified
        athletic trainer, are directly attributable to participation in
        sanctioned intercollegiate athletics while a full-time student and team
        member at Lindenwood University.
      </p>
      <p className={classes.p}>
        The current secondary policy is an accident-only policy and an excess
        policy.This policy carries a disappearing $1,000 deductible and eligible
        medical expenses payable under any other insurance policy or service
        contract may be used to satisfy or reduce the deductible.After the
        student-athlete's primary health insurance policy is exhausted and the
        $1,000 deductible has been met for the university policy, the secondary
        health insurance may provide up to the maximum benefit for eligible
        medical expenses.This may not include certain medical procedures,
        special services, durable medical equipment, etc.
      </p>
      <p className={classes.p}>
        In addition, this accident-only policywill notprovide coverage for the
        following: <br /> (1) Costs incurred from the care of injuries and
        illnesses that are not linked directly to a specific athletic accident
        or event.
        <br />
        (2) Costs associated with injuries and illnesses incurred while
        participating in activities not directly associated with the
        student-athlete's intercollegiate program. <br />
        (3) Costs incurred due to additional testing required as the result of
        issues or concerns raised during the pre-participation examinations.{" "}
        <br />
        (4) Costs incurred from the emergency care of medical conditions that
        are not directly attributable to the participation in intercollegiate
        athletics (ie. appendectomy).
        <br />
        (5) Costs incurred due to dental care not relating directly to an
        athletic incident. <br />
        (6) Costs incurred due to injuries associated with fighting (regardless
        of the setting).
      </p>
      <p className={classes.p}>
        Guidelines for Reporting an Injury/Submitting a Claim <br />
        (1) The athlete must report all injuries and illnesses to the athletic
        training staff in a timely manner for appropriate evaluation and
        referral. <br />
        (2) All medical services and referrals must be coordinated and/or
        approved by the athletic training department. Any costs related to
        medical services scheduled without notification and approval from the
        athletic training department will be the sole responsibility of the
        student-athlete: this does not include emergency care.In the event of an
        emergency visit, the student-athlete should seek assistance from the
        athletic training staff immediately after returning to campus. <br />
        (3) The student-athlete must first have all medical expenses filed with
        his/her primary insurance carrier prior to the secondary policy. <br />
        (4) Once the incident has been verified by the athletic training staff,
        a claim form will be submitted to the secondary insurance company by the
        secondary insurance coordinator. <br />
        (5){" "}
        <b>
          The student-athlete is responsible for ensuring all information is
          submitted to the secondary insurance company.
        </b>
        Secondary insurance company information will be provided to the student
        prior to the first medical appointment. <br />
        (6) Requested information may be submitted to the secondary insurance
        company via: Direct submission from the healthcare provider by providing
        them with the secondary insurance company information Indirect
        submission from the student-athlete after information is obtained from
        the involved parties (medical providers and primary insurance carrier){" "}
        <br />
        (7) The student-athlete is responsible for ensuring all requested
        information from the secondary insurance company is provided in a timely
        manner.This may include, but is not limited to: parent employment
        verification, itemized bills for services, explanations of benefits,
        etc.
      </p>
      <p
        className={classes.p}
        style={{
          //style for the paragraph
          fontWeight: "bold"
        }}
      >
        Lindenwood University Compliance Staff:
      </p>
      <form
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around"
        }}
      >
        <p className={classes.p} style={{ maxWidth: "400px" }}>
          Anna Girdwood: Assistant Athletics Director for Compliance Office
          Phone: (636) 949-4654 Email: agirdwood@lindenwood.edu
        </p>
        <p className={classes.p} style={{ maxWidth: "400px" }}>
          Massey Arnold: Assistant Director for Compliance Office Phone: (636)
          255-2216 Email: marnold@lindenwood.edu
        </p>
      </form>
    </div>
  );
}
HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(HomePage);
