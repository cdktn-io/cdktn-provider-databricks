# `supervisorAgentTool` Submodule <a name="`supervisorAgentTool` Submodule" id="@cdktn/provider-databricks.supervisorAgentTool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SupervisorAgentTool <a name="SupervisorAgentTool" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool databricks_supervisor_agent_tool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new SupervisorAgentTool(Construct Scope, string Id, SupervisorAgentToolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig">SupervisorAgentToolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig">SupervisorAgentToolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putApp">PutApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putGenieSpace">PutGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putKnowledgeAssistant">PutKnowledgeAssistant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putUcConnection">PutUcConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putUcFunction">PutUcFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putVolume">PutVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetApp">ResetApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetGenieSpace">ResetGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetKnowledgeAssistant">ResetKnowledgeAssistant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetUcConnection">ResetUcConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetUcFunction">ResetUcFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetVolume">ResetVolume</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApp` <a name="PutApp" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putApp"></a>

```csharp
private void PutApp(SupervisorAgentToolApp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putApp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp">SupervisorAgentToolApp</a>

---

##### `PutGenieSpace` <a name="PutGenieSpace" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putGenieSpace"></a>

```csharp
private void PutGenieSpace(SupervisorAgentToolGenieSpace Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putGenieSpace.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace">SupervisorAgentToolGenieSpace</a>

---

##### `PutKnowledgeAssistant` <a name="PutKnowledgeAssistant" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putKnowledgeAssistant"></a>

```csharp
private void PutKnowledgeAssistant(SupervisorAgentToolKnowledgeAssistant Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putKnowledgeAssistant.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant">SupervisorAgentToolKnowledgeAssistant</a>

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putProviderConfig"></a>

```csharp
private void PutProviderConfig(SupervisorAgentToolProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig">SupervisorAgentToolProviderConfig</a>

---

##### `PutUcConnection` <a name="PutUcConnection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putUcConnection"></a>

```csharp
private void PutUcConnection(SupervisorAgentToolUcConnection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putUcConnection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection">SupervisorAgentToolUcConnection</a>

---

##### `PutUcFunction` <a name="PutUcFunction" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putUcFunction"></a>

```csharp
private void PutUcFunction(SupervisorAgentToolUcFunction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putUcFunction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction">SupervisorAgentToolUcFunction</a>

---

##### `PutVolume` <a name="PutVolume" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putVolume"></a>

```csharp
private void PutVolume(SupervisorAgentToolVolume Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putVolume.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume">SupervisorAgentToolVolume</a>

---

##### `ResetApp` <a name="ResetApp" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetApp"></a>

```csharp
private void ResetApp()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGenieSpace` <a name="ResetGenieSpace" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetGenieSpace"></a>

```csharp
private void ResetGenieSpace()
```

##### `ResetKnowledgeAssistant` <a name="ResetKnowledgeAssistant" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetKnowledgeAssistant"></a>

```csharp
private void ResetKnowledgeAssistant()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

##### `ResetUcConnection` <a name="ResetUcConnection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetUcConnection"></a>

```csharp
private void ResetUcConnection()
```

##### `ResetUcFunction` <a name="ResetUcFunction" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetUcFunction"></a>

```csharp
private void ResetUcFunction()
```

##### `ResetVolume` <a name="ResetVolume" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetVolume"></a>

```csharp
private void ResetVolume()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SupervisorAgentTool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

SupervisorAgentTool.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

SupervisorAgentTool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

SupervisorAgentTool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

SupervisorAgentTool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SupervisorAgentTool resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SupervisorAgentTool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SupervisorAgentTool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SupervisorAgentTool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.app">App</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference">SupervisorAgentToolAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.genieSpace">GenieSpace</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference">SupervisorAgentToolGenieSpaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.knowledgeAssistant">KnowledgeAssistant</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference">SupervisorAgentToolKnowledgeAssistantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference">SupervisorAgentToolProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucConnection">UcConnection</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference">SupervisorAgentToolUcConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucFunction">UcFunction</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference">SupervisorAgentToolUcFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.volume">Volume</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference">SupervisorAgentToolVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.appInput">AppInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp">SupervisorAgentToolApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.genieSpaceInput">GenieSpaceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace">SupervisorAgentToolGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.knowledgeAssistantInput">KnowledgeAssistantInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant">SupervisorAgentToolKnowledgeAssistant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig">SupervisorAgentToolProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolIdInput">ToolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolTypeInput">ToolTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucConnectionInput">UcConnectionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection">SupervisorAgentToolUcConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucFunctionInput">UcFunctionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction">SupervisorAgentToolUcFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.volumeInput">VolumeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume">SupervisorAgentToolVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolId">ToolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolType">ToolType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.app"></a>

```csharp
public SupervisorAgentToolAppOutputReference App { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference">SupervisorAgentToolAppOutputReference</a>

---

##### `GenieSpace`<sup>Required</sup> <a name="GenieSpace" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.genieSpace"></a>

```csharp
public SupervisorAgentToolGenieSpaceOutputReference GenieSpace { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference">SupervisorAgentToolGenieSpaceOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KnowledgeAssistant`<sup>Required</sup> <a name="KnowledgeAssistant" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.knowledgeAssistant"></a>

```csharp
public SupervisorAgentToolKnowledgeAssistantOutputReference KnowledgeAssistant { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference">SupervisorAgentToolKnowledgeAssistantOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.providerConfig"></a>

```csharp
public SupervisorAgentToolProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference">SupervisorAgentToolProviderConfigOutputReference</a>

---

##### `UcConnection`<sup>Required</sup> <a name="UcConnection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucConnection"></a>

```csharp
public SupervisorAgentToolUcConnectionOutputReference UcConnection { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference">SupervisorAgentToolUcConnectionOutputReference</a>

---

##### `UcFunction`<sup>Required</sup> <a name="UcFunction" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucFunction"></a>

```csharp
public SupervisorAgentToolUcFunctionOutputReference UcFunction { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference">SupervisorAgentToolUcFunctionOutputReference</a>

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.volume"></a>

```csharp
public SupervisorAgentToolVolumeOutputReference Volume { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference">SupervisorAgentToolVolumeOutputReference</a>

---

##### `AppInput`<sup>Optional</sup> <a name="AppInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.appInput"></a>

```csharp
public IResolvable|SupervisorAgentToolApp AppInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp">SupervisorAgentToolApp</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GenieSpaceInput`<sup>Optional</sup> <a name="GenieSpaceInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.genieSpaceInput"></a>

```csharp
public IResolvable|SupervisorAgentToolGenieSpace GenieSpaceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace">SupervisorAgentToolGenieSpace</a>

---

##### `KnowledgeAssistantInput`<sup>Optional</sup> <a name="KnowledgeAssistantInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.knowledgeAssistantInput"></a>

```csharp
public IResolvable|SupervisorAgentToolKnowledgeAssistant KnowledgeAssistantInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant">SupervisorAgentToolKnowledgeAssistant</a>

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.providerConfigInput"></a>

```csharp
public IResolvable|SupervisorAgentToolProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig">SupervisorAgentToolProviderConfig</a>

---

##### `ToolIdInput`<sup>Optional</sup> <a name="ToolIdInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolIdInput"></a>

```csharp
public string ToolIdInput { get; }
```

- *Type:* string

---

##### `ToolTypeInput`<sup>Optional</sup> <a name="ToolTypeInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolTypeInput"></a>

```csharp
public string ToolTypeInput { get; }
```

- *Type:* string

---

##### `UcConnectionInput`<sup>Optional</sup> <a name="UcConnectionInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucConnectionInput"></a>

```csharp
public IResolvable|SupervisorAgentToolUcConnection UcConnectionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection">SupervisorAgentToolUcConnection</a>

---

##### `UcFunctionInput`<sup>Optional</sup> <a name="UcFunctionInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucFunctionInput"></a>

```csharp
public IResolvable|SupervisorAgentToolUcFunction UcFunctionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction">SupervisorAgentToolUcFunction</a>

---

##### `VolumeInput`<sup>Optional</sup> <a name="VolumeInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.volumeInput"></a>

```csharp
public IResolvable|SupervisorAgentToolVolume VolumeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume">SupervisorAgentToolVolume</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `ToolId`<sup>Required</sup> <a name="ToolId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolId"></a>

```csharp
public string ToolId { get; }
```

- *Type:* string

---

##### `ToolType`<sup>Required</sup> <a name="ToolType" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolType"></a>

```csharp
public string ToolType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SupervisorAgentToolApp <a name="SupervisorAgentToolApp" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new SupervisorAgentToolApp {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}.

---

### SupervisorAgentToolConfig <a name="SupervisorAgentToolConfig" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new SupervisorAgentToolConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Parent,
    string ToolId,
    string ToolType,
    SupervisorAgentToolApp App = null,
    string Description = null,
    SupervisorAgentToolGenieSpace GenieSpace = null,
    SupervisorAgentToolKnowledgeAssistant KnowledgeAssistant = null,
    SupervisorAgentToolProviderConfig ProviderConfig = null,
    SupervisorAgentToolUcConnection UcConnection = null,
    SupervisorAgentToolUcFunction UcFunction = null,
    SupervisorAgentToolVolume Volume = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.parent">Parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#parent SupervisorAgentTool#parent}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.toolId">ToolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#tool_id SupervisorAgentTool#tool_id}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.toolType">ToolType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#tool_type SupervisorAgentTool#tool_type}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.app">App</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp">SupervisorAgentToolApp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#app SupervisorAgentTool#app}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#description SupervisorAgentTool#description}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.genieSpace">GenieSpace</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace">SupervisorAgentToolGenieSpace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#genie_space SupervisorAgentTool#genie_space}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.knowledgeAssistant">KnowledgeAssistant</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant">SupervisorAgentToolKnowledgeAssistant</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#knowledge_assistant SupervisorAgentTool#knowledge_assistant}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig">SupervisorAgentToolProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#provider_config SupervisorAgentTool#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.ucConnection">UcConnection</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection">SupervisorAgentToolUcConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#uc_connection SupervisorAgentTool#uc_connection}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.ucFunction">UcFunction</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction">SupervisorAgentToolUcFunction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#uc_function SupervisorAgentTool#uc_function}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.volume">Volume</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume">SupervisorAgentToolVolume</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#volume SupervisorAgentTool#volume}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#parent SupervisorAgentTool#parent}.

---

##### `ToolId`<sup>Required</sup> <a name="ToolId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.toolId"></a>

```csharp
public string ToolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#tool_id SupervisorAgentTool#tool_id}.

---

##### `ToolType`<sup>Required</sup> <a name="ToolType" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.toolType"></a>

```csharp
public string ToolType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#tool_type SupervisorAgentTool#tool_type}.

---

##### `App`<sup>Optional</sup> <a name="App" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.app"></a>

```csharp
public SupervisorAgentToolApp App { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp">SupervisorAgentToolApp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#app SupervisorAgentTool#app}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#description SupervisorAgentTool#description}.

---

##### `GenieSpace`<sup>Optional</sup> <a name="GenieSpace" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.genieSpace"></a>

```csharp
public SupervisorAgentToolGenieSpace GenieSpace { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace">SupervisorAgentToolGenieSpace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#genie_space SupervisorAgentTool#genie_space}.

---

##### `KnowledgeAssistant`<sup>Optional</sup> <a name="KnowledgeAssistant" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.knowledgeAssistant"></a>

```csharp
public SupervisorAgentToolKnowledgeAssistant KnowledgeAssistant { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant">SupervisorAgentToolKnowledgeAssistant</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#knowledge_assistant SupervisorAgentTool#knowledge_assistant}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.providerConfig"></a>

```csharp
public SupervisorAgentToolProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig">SupervisorAgentToolProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#provider_config SupervisorAgentTool#provider_config}.

---

##### `UcConnection`<sup>Optional</sup> <a name="UcConnection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.ucConnection"></a>

```csharp
public SupervisorAgentToolUcConnection UcConnection { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection">SupervisorAgentToolUcConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#uc_connection SupervisorAgentTool#uc_connection}.

---

##### `UcFunction`<sup>Optional</sup> <a name="UcFunction" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.ucFunction"></a>

```csharp
public SupervisorAgentToolUcFunction UcFunction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction">SupervisorAgentToolUcFunction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#uc_function SupervisorAgentTool#uc_function}.

---

##### `Volume`<sup>Optional</sup> <a name="Volume" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.volume"></a>

```csharp
public SupervisorAgentToolVolume Volume { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume">SupervisorAgentToolVolume</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#volume SupervisorAgentTool#volume}.

---

### SupervisorAgentToolGenieSpace <a name="SupervisorAgentToolGenieSpace" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new SupervisorAgentToolGenieSpace {
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#id SupervisorAgentTool#id}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#id SupervisorAgentTool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SupervisorAgentToolKnowledgeAssistant <a name="SupervisorAgentToolKnowledgeAssistant" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new SupervisorAgentToolKnowledgeAssistant {
    string KnowledgeAssistantId,
    string ServingEndpointName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant.property.knowledgeAssistantId">KnowledgeAssistantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#knowledge_assistant_id SupervisorAgentTool#knowledge_assistant_id}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant.property.servingEndpointName">ServingEndpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#serving_endpoint_name SupervisorAgentTool#serving_endpoint_name}. |

---

##### `KnowledgeAssistantId`<sup>Required</sup> <a name="KnowledgeAssistantId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant.property.knowledgeAssistantId"></a>

```csharp
public string KnowledgeAssistantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#knowledge_assistant_id SupervisorAgentTool#knowledge_assistant_id}.

---

##### `ServingEndpointName`<sup>Optional</sup> <a name="ServingEndpointName" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant.property.servingEndpointName"></a>

```csharp
public string ServingEndpointName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#serving_endpoint_name SupervisorAgentTool#serving_endpoint_name}.

---

### SupervisorAgentToolProviderConfig <a name="SupervisorAgentToolProviderConfig" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new SupervisorAgentToolProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#workspace_id SupervisorAgentTool#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#workspace_id SupervisorAgentTool#workspace_id}.

---

### SupervisorAgentToolUcConnection <a name="SupervisorAgentToolUcConnection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new SupervisorAgentToolUcConnection {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}.

---

### SupervisorAgentToolUcFunction <a name="SupervisorAgentToolUcFunction" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new SupervisorAgentToolUcFunction {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}.

---

### SupervisorAgentToolVolume <a name="SupervisorAgentToolVolume" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new SupervisorAgentToolVolume {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### SupervisorAgentToolAppOutputReference <a name="SupervisorAgentToolAppOutputReference" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new SupervisorAgentToolAppOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp">SupervisorAgentToolApp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SupervisorAgentToolApp InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp">SupervisorAgentToolApp</a>

---


### SupervisorAgentToolGenieSpaceOutputReference <a name="SupervisorAgentToolGenieSpaceOutputReference" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new SupervisorAgentToolGenieSpaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace">SupervisorAgentToolGenieSpace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SupervisorAgentToolGenieSpace InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace">SupervisorAgentToolGenieSpace</a>

---


### SupervisorAgentToolKnowledgeAssistantOutputReference <a name="SupervisorAgentToolKnowledgeAssistantOutputReference" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new SupervisorAgentToolKnowledgeAssistantOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.resetServingEndpointName">ResetServingEndpointName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServingEndpointName` <a name="ResetServingEndpointName" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.resetServingEndpointName"></a>

```csharp
private void ResetServingEndpointName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.knowledgeAssistantIdInput">KnowledgeAssistantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.servingEndpointNameInput">ServingEndpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.knowledgeAssistantId">KnowledgeAssistantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.servingEndpointName">ServingEndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant">SupervisorAgentToolKnowledgeAssistant</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KnowledgeAssistantIdInput`<sup>Optional</sup> <a name="KnowledgeAssistantIdInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.knowledgeAssistantIdInput"></a>

```csharp
public string KnowledgeAssistantIdInput { get; }
```

- *Type:* string

---

##### `ServingEndpointNameInput`<sup>Optional</sup> <a name="ServingEndpointNameInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.servingEndpointNameInput"></a>

```csharp
public string ServingEndpointNameInput { get; }
```

- *Type:* string

---

##### `KnowledgeAssistantId`<sup>Required</sup> <a name="KnowledgeAssistantId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.knowledgeAssistantId"></a>

```csharp
public string KnowledgeAssistantId { get; }
```

- *Type:* string

---

##### `ServingEndpointName`<sup>Required</sup> <a name="ServingEndpointName" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.servingEndpointName"></a>

```csharp
public string ServingEndpointName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SupervisorAgentToolKnowledgeAssistant InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant">SupervisorAgentToolKnowledgeAssistant</a>

---


### SupervisorAgentToolProviderConfigOutputReference <a name="SupervisorAgentToolProviderConfigOutputReference" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new SupervisorAgentToolProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig">SupervisorAgentToolProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SupervisorAgentToolProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig">SupervisorAgentToolProviderConfig</a>

---


### SupervisorAgentToolUcConnectionOutputReference <a name="SupervisorAgentToolUcConnectionOutputReference" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new SupervisorAgentToolUcConnectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection">SupervisorAgentToolUcConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SupervisorAgentToolUcConnection InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection">SupervisorAgentToolUcConnection</a>

---


### SupervisorAgentToolUcFunctionOutputReference <a name="SupervisorAgentToolUcFunctionOutputReference" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new SupervisorAgentToolUcFunctionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction">SupervisorAgentToolUcFunction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SupervisorAgentToolUcFunction InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction">SupervisorAgentToolUcFunction</a>

---


### SupervisorAgentToolVolumeOutputReference <a name="SupervisorAgentToolVolumeOutputReference" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new SupervisorAgentToolVolumeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume">SupervisorAgentToolVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SupervisorAgentToolVolume InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume">SupervisorAgentToolVolume</a>

---



