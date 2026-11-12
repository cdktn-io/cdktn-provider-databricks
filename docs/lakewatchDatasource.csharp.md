# `lakewatchDatasource` Submodule <a name="`lakewatchDatasource` Submodule" id="@cdktn/provider-databricks.lakewatchDatasource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakewatchDatasource <a name="LakewatchDatasource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource databricks_lakewatch_datasource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasource(Construct Scope, string Id, LakewatchDatasourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig">LakewatchDatasourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig">LakewatchDatasourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putAutoloader">PutAutoloader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putExistingTable">PutExistingTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putParsers">PutParsers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putUnityCatalogConnection">PutUnityCatalogConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetAutoloader">ResetAutoloader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetComputeMode">ResetComputeMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetExistingTable">ResetExistingTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetParsers">ResetParsers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetRunAsPrincipal">ResetRunAsPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetUnityCatalogConnection">ResetUnityCatalogConnection</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoloader` <a name="PutAutoloader" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putAutoloader"></a>

```csharp
private void PutAutoloader(LakewatchDatasourceAutoloader Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putAutoloader.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader">LakewatchDatasourceAutoloader</a>

---

##### `PutExistingTable` <a name="PutExistingTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putExistingTable"></a>

```csharp
private void PutExistingTable(LakewatchDatasourceExistingTable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putExistingTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable">LakewatchDatasourceExistingTable</a>

---

##### `PutParsers` <a name="PutParsers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putParsers"></a>

```csharp
private void PutParsers(IResolvable|LakewatchDatasourceParsers[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putParsers.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>[]

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putProviderConfig"></a>

```csharp
private void PutProviderConfig(LakewatchDatasourceProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig">LakewatchDatasourceProviderConfig</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putSchedule"></a>

```csharp
private void PutSchedule(LakewatchDatasourceSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule">LakewatchDatasourceSchedule</a>

---

##### `PutUnityCatalogConnection` <a name="PutUnityCatalogConnection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putUnityCatalogConnection"></a>

```csharp
private void PutUnityCatalogConnection(LakewatchDatasourceUnityCatalogConnection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.putUnityCatalogConnection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection">LakewatchDatasourceUnityCatalogConnection</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetAutoloader` <a name="ResetAutoloader" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetAutoloader"></a>

```csharp
private void ResetAutoloader()
```

##### `ResetComputeMode` <a name="ResetComputeMode" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetComputeMode"></a>

```csharp
private void ResetComputeMode()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExistingTable` <a name="ResetExistingTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetExistingTable"></a>

```csharp
private void ResetExistingTable()
```

##### `ResetParsers` <a name="ResetParsers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetParsers"></a>

```csharp
private void ResetParsers()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

##### `ResetRunAsPrincipal` <a name="ResetRunAsPrincipal" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetRunAsPrincipal"></a>

```csharp
private void ResetRunAsPrincipal()
```

##### `ResetUnityCatalogConnection` <a name="ResetUnityCatalogConnection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.resetUnityCatalogConnection"></a>

```csharp
private void ResetUnityCatalogConnection()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LakewatchDatasource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

LakewatchDatasource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

LakewatchDatasource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

LakewatchDatasource.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

LakewatchDatasource.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LakewatchDatasource resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LakewatchDatasource to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LakewatchDatasource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LakewatchDatasource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.autoloader">Autoloader</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference">LakewatchDatasourceAutoloaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.computeWorkspaceId">ComputeWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.createdBy">CreatedBy</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference">LakewatchDatasourceCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.datasourceId">DatasourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveCatalogName">EffectiveCatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveDatasourceName">EffectiveDatasourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveRunAsPrincipal">EffectiveRunAsPrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveSchemaName">EffectiveSchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.existingTable">ExistingTable</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference">LakewatchDatasourceExistingTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.owner">Owner</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference">LakewatchDatasourceOwnerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.parsers">Parsers</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList">LakewatchDatasourceParsersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference">LakewatchDatasourceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference">LakewatchDatasourceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.status">Status</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference">LakewatchDatasourceStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.unityCatalogConnection">UnityCatalogConnection</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference">LakewatchDatasourceUnityCatalogConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.updatedBy">UpdatedBy</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference">LakewatchDatasourceUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.autoloaderInput">AutoloaderInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader">LakewatchDatasourceAutoloader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.catalogNameInput">CatalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.computeModeInput">ComputeModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.datasourceNameInput">DatasourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.existingTableInput">ExistingTableInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable">LakewatchDatasourceExistingTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.parsersInput">ParsersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig">LakewatchDatasourceProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.runAsPrincipalInput">RunAsPrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.scheduleInput">ScheduleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule">LakewatchDatasourceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.unityCatalogConnectionInput">UnityCatalogConnectionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection">LakewatchDatasourceUnityCatalogConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.warehouseIdInput">WarehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.catalogName">CatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.computeMode">ComputeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.datasourceName">DatasourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.runAsPrincipal">RunAsPrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.warehouseId">WarehouseId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Autoloader`<sup>Required</sup> <a name="Autoloader" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.autoloader"></a>

```csharp
public LakewatchDatasourceAutoloaderOutputReference Autoloader { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference">LakewatchDatasourceAutoloaderOutputReference</a>

---

##### `ComputeWorkspaceId`<sup>Required</sup> <a name="ComputeWorkspaceId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.computeWorkspaceId"></a>

```csharp
public string ComputeWorkspaceId { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.createdBy"></a>

```csharp
public LakewatchDatasourceCreatedByOutputReference CreatedBy { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference">LakewatchDatasourceCreatedByOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DatasourceId`<sup>Required</sup> <a name="DatasourceId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.datasourceId"></a>

```csharp
public string DatasourceId { get; }
```

- *Type:* string

---

##### `EffectiveCatalogName`<sup>Required</sup> <a name="EffectiveCatalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveCatalogName"></a>

```csharp
public string EffectiveCatalogName { get; }
```

- *Type:* string

---

##### `EffectiveDatasourceName`<sup>Required</sup> <a name="EffectiveDatasourceName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveDatasourceName"></a>

```csharp
public string EffectiveDatasourceName { get; }
```

- *Type:* string

---

##### `EffectiveRunAsPrincipal`<sup>Required</sup> <a name="EffectiveRunAsPrincipal" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveRunAsPrincipal"></a>

```csharp
public string EffectiveRunAsPrincipal { get; }
```

- *Type:* string

---

##### `EffectiveSchemaName`<sup>Required</sup> <a name="EffectiveSchemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.effectiveSchemaName"></a>

```csharp
public string EffectiveSchemaName { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ExistingTable`<sup>Required</sup> <a name="ExistingTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.existingTable"></a>

```csharp
public LakewatchDatasourceExistingTableOutputReference ExistingTable { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference">LakewatchDatasourceExistingTableOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.owner"></a>

```csharp
public LakewatchDatasourceOwnerOutputReference Owner { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference">LakewatchDatasourceOwnerOutputReference</a>

---

##### `Parsers`<sup>Required</sup> <a name="Parsers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.parsers"></a>

```csharp
public LakewatchDatasourceParsersList Parsers { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList">LakewatchDatasourceParsersList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.providerConfig"></a>

```csharp
public LakewatchDatasourceProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference">LakewatchDatasourceProviderConfigOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.schedule"></a>

```csharp
public LakewatchDatasourceScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference">LakewatchDatasourceScheduleOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.status"></a>

```csharp
public LakewatchDatasourceStatusOutputReference Status { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference">LakewatchDatasourceStatusOutputReference</a>

---

##### `UnityCatalogConnection`<sup>Required</sup> <a name="UnityCatalogConnection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.unityCatalogConnection"></a>

```csharp
public LakewatchDatasourceUnityCatalogConnectionOutputReference UnityCatalogConnection { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference">LakewatchDatasourceUnityCatalogConnectionOutputReference</a>

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.updatedBy"></a>

```csharp
public LakewatchDatasourceUpdatedByOutputReference UpdatedBy { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference">LakewatchDatasourceUpdatedByOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AutoloaderInput`<sup>Optional</sup> <a name="AutoloaderInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.autoloaderInput"></a>

```csharp
public IResolvable|LakewatchDatasourceAutoloader AutoloaderInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader">LakewatchDatasourceAutoloader</a>

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.catalogNameInput"></a>

```csharp
public string CatalogNameInput { get; }
```

- *Type:* string

---

##### `ComputeModeInput`<sup>Optional</sup> <a name="ComputeModeInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.computeModeInput"></a>

```csharp
public string ComputeModeInput { get; }
```

- *Type:* string

---

##### `DatasourceNameInput`<sup>Optional</sup> <a name="DatasourceNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.datasourceNameInput"></a>

```csharp
public string DatasourceNameInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExistingTableInput`<sup>Optional</sup> <a name="ExistingTableInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.existingTableInput"></a>

```csharp
public IResolvable|LakewatchDatasourceExistingTable ExistingTableInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable">LakewatchDatasourceExistingTable</a>

---

##### `ParsersInput`<sup>Optional</sup> <a name="ParsersInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.parsersInput"></a>

```csharp
public IResolvable|LakewatchDatasourceParsers[] ParsersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>[]

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.providerConfigInput"></a>

```csharp
public IResolvable|LakewatchDatasourceProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig">LakewatchDatasourceProviderConfig</a>

---

##### `RunAsPrincipalInput`<sup>Optional</sup> <a name="RunAsPrincipalInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.runAsPrincipalInput"></a>

```csharp
public string RunAsPrincipalInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.scheduleInput"></a>

```csharp
public IResolvable|LakewatchDatasourceSchedule ScheduleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule">LakewatchDatasourceSchedule</a>

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `UnityCatalogConnectionInput`<sup>Optional</sup> <a name="UnityCatalogConnectionInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.unityCatalogConnectionInput"></a>

```csharp
public IResolvable|LakewatchDatasourceUnityCatalogConnection UnityCatalogConnectionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection">LakewatchDatasourceUnityCatalogConnection</a>

---

##### `WarehouseIdInput`<sup>Optional</sup> <a name="WarehouseIdInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.warehouseIdInput"></a>

```csharp
public string WarehouseIdInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.catalogName"></a>

```csharp
public string CatalogName { get; }
```

- *Type:* string

---

##### `ComputeMode`<sup>Required</sup> <a name="ComputeMode" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.computeMode"></a>

```csharp
public string ComputeMode { get; }
```

- *Type:* string

---

##### `DatasourceName`<sup>Required</sup> <a name="DatasourceName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.datasourceName"></a>

```csharp
public string DatasourceName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `RunAsPrincipal`<sup>Required</sup> <a name="RunAsPrincipal" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.runAsPrincipal"></a>

```csharp
public string RunAsPrincipal { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.warehouseId"></a>

```csharp
public string WarehouseId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LakewatchDatasourceAutoloader <a name="LakewatchDatasourceAutoloader" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceAutoloader {
    string Format,
    string Location,
    LakewatchDatasourceAutoloaderRawTable RawTable,
    string AwsSecretScope = null,
    LakewatchDatasourceAutoloaderEnvelope Envelope = null,
    System.Collections.Generic.IDictionary<string, string> FormatOptions = null,
    bool|IResolvable IncludeExistingFiles = null,
    string[] OverridePartitionColumns = null,
    string QueueUrl = null,
    string ServiceCredentials = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.format">Format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#format LakewatchDatasource#format}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#location LakewatchDatasource#location}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.rawTable">RawTable</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable">LakewatchDatasourceAutoloaderRawTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#raw_table LakewatchDatasource#raw_table}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.awsSecretScope">AwsSecretScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#aws_secret_scope LakewatchDatasource#aws_secret_scope}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.envelope">Envelope</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope">LakewatchDatasourceAutoloaderEnvelope</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#envelope LakewatchDatasource#envelope}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.formatOptions">FormatOptions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#format_options LakewatchDatasource#format_options}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.includeExistingFiles">IncludeExistingFiles</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#include_existing_files LakewatchDatasource#include_existing_files}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.overridePartitionColumns">OverridePartitionColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#override_partition_columns LakewatchDatasource#override_partition_columns}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.queueUrl">QueueUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#queue_url LakewatchDatasource#queue_url}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.serviceCredentials">ServiceCredentials</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#service_credentials LakewatchDatasource#service_credentials}. |

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#format LakewatchDatasource#format}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#location LakewatchDatasource#location}.

---

##### `RawTable`<sup>Required</sup> <a name="RawTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.rawTable"></a>

```csharp
public LakewatchDatasourceAutoloaderRawTable RawTable { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable">LakewatchDatasourceAutoloaderRawTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#raw_table LakewatchDatasource#raw_table}.

---

##### `AwsSecretScope`<sup>Optional</sup> <a name="AwsSecretScope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.awsSecretScope"></a>

```csharp
public string AwsSecretScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#aws_secret_scope LakewatchDatasource#aws_secret_scope}.

---

##### `Envelope`<sup>Optional</sup> <a name="Envelope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.envelope"></a>

```csharp
public LakewatchDatasourceAutoloaderEnvelope Envelope { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope">LakewatchDatasourceAutoloaderEnvelope</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#envelope LakewatchDatasource#envelope}.

---

##### `FormatOptions`<sup>Optional</sup> <a name="FormatOptions" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.formatOptions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FormatOptions { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#format_options LakewatchDatasource#format_options}.

---

##### `IncludeExistingFiles`<sup>Optional</sup> <a name="IncludeExistingFiles" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.includeExistingFiles"></a>

```csharp
public bool|IResolvable IncludeExistingFiles { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#include_existing_files LakewatchDatasource#include_existing_files}.

---

##### `OverridePartitionColumns`<sup>Optional</sup> <a name="OverridePartitionColumns" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.overridePartitionColumns"></a>

```csharp
public string[] OverridePartitionColumns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#override_partition_columns LakewatchDatasource#override_partition_columns}.

---

##### `QueueUrl`<sup>Optional</sup> <a name="QueueUrl" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.queueUrl"></a>

```csharp
public string QueueUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#queue_url LakewatchDatasource#queue_url}.

---

##### `ServiceCredentials`<sup>Optional</sup> <a name="ServiceCredentials" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader.property.serviceCredentials"></a>

```csharp
public string ServiceCredentials { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#service_credentials LakewatchDatasource#service_credentials}.

---

### LakewatchDatasourceAutoloaderEffectiveRawTable <a name="LakewatchDatasourceAutoloaderEffectiveRawTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceAutoloaderEffectiveRawTable {
    string TableName,
    string CatalogName = null,
    string SchemaName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable.property.tableName">TableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable.property.catalogName">CatalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable.property.schemaName">SchemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}. |

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}.

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable.property.catalogName"></a>

```csharp
public string CatalogName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}.

---

### LakewatchDatasourceAutoloaderEnvelope <a name="LakewatchDatasourceAutoloaderEnvelope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceAutoloaderEnvelope {
    LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs CloudWatchLogs = null,
    LakewatchDatasourceAutoloaderEnvelopeJsonArray JsonArray = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope.property.cloudWatchLogs">CloudWatchLogs</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#cloud_watch_logs LakewatchDatasource#cloud_watch_logs}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope.property.jsonArray">JsonArray</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray">LakewatchDatasourceAutoloaderEnvelopeJsonArray</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#json_array LakewatchDatasource#json_array}. |

---

##### `CloudWatchLogs`<sup>Optional</sup> <a name="CloudWatchLogs" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope.property.cloudWatchLogs"></a>

```csharp
public LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs CloudWatchLogs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#cloud_watch_logs LakewatchDatasource#cloud_watch_logs}.

---

##### `JsonArray`<sup>Optional</sup> <a name="JsonArray" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope.property.jsonArray"></a>

```csharp
public LakewatchDatasourceAutoloaderEnvelopeJsonArray JsonArray { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray">LakewatchDatasourceAutoloaderEnvelopeJsonArray</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#json_array LakewatchDatasource#json_array}.

---

### LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs <a name="LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs {
    bool|IResolvable HeaderRetention = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs.property.headerRetention">HeaderRetention</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#header_retention LakewatchDatasource#header_retention}. |

---

##### `HeaderRetention`<sup>Optional</sup> <a name="HeaderRetention" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs.property.headerRetention"></a>

```csharp
public bool|IResolvable HeaderRetention { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#header_retention LakewatchDatasource#header_retention}.

---

### LakewatchDatasourceAutoloaderEnvelopeJsonArray <a name="LakewatchDatasourceAutoloaderEnvelopeJsonArray" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceAutoloaderEnvelopeJsonArray {
    string Path
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#path LakewatchDatasource#path}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#path LakewatchDatasource#path}.

---

### LakewatchDatasourceAutoloaderRawTable <a name="LakewatchDatasourceAutoloaderRawTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceAutoloaderRawTable {
    string TableName,
    string CatalogName = null,
    string SchemaName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable.property.tableName">TableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable.property.catalogName">CatalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable.property.schemaName">SchemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}. |

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}.

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable.property.catalogName"></a>

```csharp
public string CatalogName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}.

---

### LakewatchDatasourceConfig <a name="LakewatchDatasourceConfig" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CatalogName,
    string DatasourceName,
    LakewatchDatasourceSchedule Schedule,
    string SchemaName,
    string WarehouseId,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    LakewatchDatasourceAutoloader Autoloader = null,
    string ComputeMode = null,
    string Description = null,
    LakewatchDatasourceExistingTable ExistingTable = null,
    IResolvable|LakewatchDatasourceParsers[] Parsers = null,
    LakewatchDatasourceProviderConfig ProviderConfig = null,
    string RunAsPrincipal = null,
    LakewatchDatasourceUnityCatalogConnection UnityCatalogConnection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.catalogName">CatalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.datasourceName">DatasourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#datasource_name LakewatchDatasource#datasource_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule">LakewatchDatasourceSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schedule LakewatchDatasource#schedule}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.schemaName">SchemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.warehouseId">WarehouseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#warehouse_id LakewatchDatasource#warehouse_id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#annotations LakewatchDatasource#annotations}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.autoloader">Autoloader</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader">LakewatchDatasourceAutoloader</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#autoloader LakewatchDatasource#autoloader}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.computeMode">ComputeMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#compute_mode LakewatchDatasource#compute_mode}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#description LakewatchDatasource#description}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.existingTable">ExistingTable</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable">LakewatchDatasourceExistingTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#existing_table LakewatchDatasource#existing_table}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.parsers">Parsers</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#parsers LakewatchDatasource#parsers}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig">LakewatchDatasourceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#provider_config LakewatchDatasource#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.runAsPrincipal">RunAsPrincipal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#run_as_principal LakewatchDatasource#run_as_principal}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.unityCatalogConnection">UnityCatalogConnection</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection">LakewatchDatasourceUnityCatalogConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#unity_catalog_connection LakewatchDatasource#unity_catalog_connection}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.catalogName"></a>

```csharp
public string CatalogName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}.

---

##### `DatasourceName`<sup>Required</sup> <a name="DatasourceName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.datasourceName"></a>

```csharp
public string DatasourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#datasource_name LakewatchDatasource#datasource_name}.

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.schedule"></a>

```csharp
public LakewatchDatasourceSchedule Schedule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule">LakewatchDatasourceSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schedule LakewatchDatasource#schedule}.

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}.

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.warehouseId"></a>

```csharp
public string WarehouseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#warehouse_id LakewatchDatasource#warehouse_id}.

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#annotations LakewatchDatasource#annotations}.

---

##### `Autoloader`<sup>Optional</sup> <a name="Autoloader" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.autoloader"></a>

```csharp
public LakewatchDatasourceAutoloader Autoloader { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader">LakewatchDatasourceAutoloader</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#autoloader LakewatchDatasource#autoloader}.

---

##### `ComputeMode`<sup>Optional</sup> <a name="ComputeMode" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.computeMode"></a>

```csharp
public string ComputeMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#compute_mode LakewatchDatasource#compute_mode}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#description LakewatchDatasource#description}.

---

##### `ExistingTable`<sup>Optional</sup> <a name="ExistingTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.existingTable"></a>

```csharp
public LakewatchDatasourceExistingTable ExistingTable { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable">LakewatchDatasourceExistingTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#existing_table LakewatchDatasource#existing_table}.

---

##### `Parsers`<sup>Optional</sup> <a name="Parsers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.parsers"></a>

```csharp
public IResolvable|LakewatchDatasourceParsers[] Parsers { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#parsers LakewatchDatasource#parsers}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.providerConfig"></a>

```csharp
public LakewatchDatasourceProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig">LakewatchDatasourceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#provider_config LakewatchDatasource#provider_config}.

---

##### `RunAsPrincipal`<sup>Optional</sup> <a name="RunAsPrincipal" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.runAsPrincipal"></a>

```csharp
public string RunAsPrincipal { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#run_as_principal LakewatchDatasource#run_as_principal}.

---

##### `UnityCatalogConnection`<sup>Optional</sup> <a name="UnityCatalogConnection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceConfig.property.unityCatalogConnection"></a>

```csharp
public LakewatchDatasourceUnityCatalogConnection UnityCatalogConnection { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection">LakewatchDatasourceUnityCatalogConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#unity_catalog_connection LakewatchDatasource#unity_catalog_connection}.

---

### LakewatchDatasourceCreatedBy <a name="LakewatchDatasourceCreatedBy" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceCreatedBy {
    string DisplayName = null,
    string Email = null,
    string Id = null,
    string PrincipalType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#display_name LakewatchDatasource#display_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#email LakewatchDatasource#email}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.principalType">PrincipalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#principal_type LakewatchDatasource#principal_type}. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#display_name LakewatchDatasource#display_name}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#email LakewatchDatasource#email}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrincipalType`<sup>Optional</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy.property.principalType"></a>

```csharp
public string PrincipalType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#principal_type LakewatchDatasource#principal_type}.

---

### LakewatchDatasourceExistingTable <a name="LakewatchDatasourceExistingTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceExistingTable {
    string Name,
    string Catalog = null,
    bool|IResolvable IncludeExistingRows = null,
    string Schema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#name LakewatchDatasource#name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.catalog">Catalog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog LakewatchDatasource#catalog}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.includeExistingRows">IncludeExistingRows</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#include_existing_rows LakewatchDatasource#include_existing_rows}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.schema">Schema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema LakewatchDatasource#schema}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#name LakewatchDatasource#name}.

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.catalog"></a>

```csharp
public string Catalog { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog LakewatchDatasource#catalog}.

---

##### `IncludeExistingRows`<sup>Optional</sup> <a name="IncludeExistingRows" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.includeExistingRows"></a>

```csharp
public bool|IResolvable IncludeExistingRows { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#include_existing_rows LakewatchDatasource#include_existing_rows}.

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema LakewatchDatasource#schema}.

---

### LakewatchDatasourceOwner <a name="LakewatchDatasourceOwner" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceOwner {
    string DisplayName = null,
    string Email = null,
    string Id = null,
    string PrincipalType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#display_name LakewatchDatasource#display_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#email LakewatchDatasource#email}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.principalType">PrincipalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#principal_type LakewatchDatasource#principal_type}. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#display_name LakewatchDatasource#display_name}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#email LakewatchDatasource#email}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrincipalType`<sup>Optional</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner.property.principalType"></a>

```csharp
public string PrincipalType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#principal_type LakewatchDatasource#principal_type}.

---

### LakewatchDatasourceParsers <a name="LakewatchDatasourceParsers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceParsers {
    string Id,
    string Version,
    LakewatchDatasourceParsersTargetTable TargetTable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#version LakewatchDatasource#version}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers.property.targetTable">TargetTable</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable">LakewatchDatasourceParsersTargetTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#target_table LakewatchDatasource#target_table}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#version LakewatchDatasource#version}.

---

##### `TargetTable`<sup>Optional</sup> <a name="TargetTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers.property.targetTable"></a>

```csharp
public LakewatchDatasourceParsersTargetTable TargetTable { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable">LakewatchDatasourceParsersTargetTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#target_table LakewatchDatasource#target_table}.

---

### LakewatchDatasourceParsersEffectiveTargetTable <a name="LakewatchDatasourceParsersEffectiveTargetTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceParsersEffectiveTargetTable {
    string TableName,
    string CatalogName = null,
    string SchemaName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable.property.tableName">TableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable.property.catalogName">CatalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable.property.schemaName">SchemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}. |

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}.

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable.property.catalogName"></a>

```csharp
public string CatalogName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}.

---

### LakewatchDatasourceParsersTargetTable <a name="LakewatchDatasourceParsersTargetTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceParsersTargetTable {
    string TableName,
    string CatalogName = null,
    string SchemaName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable.property.tableName">TableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable.property.catalogName">CatalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable.property.schemaName">SchemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}. |

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#table_name LakewatchDatasource#table_name}.

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable.property.catalogName"></a>

```csharp
public string CatalogName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#catalog_name LakewatchDatasource#catalog_name}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#schema_name LakewatchDatasource#schema_name}.

---

### LakewatchDatasourceProviderConfig <a name="LakewatchDatasourceProviderConfig" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#workspace_id LakewatchDatasource#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#workspace_id LakewatchDatasource#workspace_id}.

---

### LakewatchDatasourceSchedule <a name="LakewatchDatasourceSchedule" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceSchedule {
    string AtLeastEvery = null,
    string ComputeGroup = null,
    bool|IResolvable Continuous = null,
    string CronExpression = null,
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.atLeastEvery">AtLeastEvery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#at_least_every LakewatchDatasource#at_least_every}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.computeGroup">ComputeGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#compute_group LakewatchDatasource#compute_group}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.continuous">Continuous</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#continuous LakewatchDatasource#continuous}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.cronExpression">CronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#cron_expression LakewatchDatasource#cron_expression}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#enabled LakewatchDatasource#enabled}. |

---

##### `AtLeastEvery`<sup>Optional</sup> <a name="AtLeastEvery" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.atLeastEvery"></a>

```csharp
public string AtLeastEvery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#at_least_every LakewatchDatasource#at_least_every}.

---

##### `ComputeGroup`<sup>Optional</sup> <a name="ComputeGroup" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.computeGroup"></a>

```csharp
public string ComputeGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#compute_group LakewatchDatasource#compute_group}.

---

##### `Continuous`<sup>Optional</sup> <a name="Continuous" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.continuous"></a>

```csharp
public bool|IResolvable Continuous { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#continuous LakewatchDatasource#continuous}.

---

##### `CronExpression`<sup>Optional</sup> <a name="CronExpression" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.cronExpression"></a>

```csharp
public string CronExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#cron_expression LakewatchDatasource#cron_expression}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#enabled LakewatchDatasource#enabled}.

---

### LakewatchDatasourceStatus <a name="LakewatchDatasourceStatus" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceStatus {

};
```


### LakewatchDatasourceStatusIngestionJob <a name="LakewatchDatasourceStatusIngestionJob" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJob.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceStatusIngestionJob {

};
```


### LakewatchDatasourceStatusIngestionPipeline <a name="LakewatchDatasourceStatusIngestionPipeline" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipeline"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipeline.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceStatusIngestionPipeline {

};
```


### LakewatchDatasourceUnityCatalogConnection <a name="LakewatchDatasourceUnityCatalogConnection" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceUnityCatalogConnection {
    string ConnectionName,
    System.Collections.Generic.IDictionary<string, string> Configuration = null,
    string StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection.property.connectionName">ConnectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#connection_name LakewatchDatasource#connection_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection.property.configuration">Configuration</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#configuration LakewatchDatasource#configuration}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#start_time LakewatchDatasource#start_time}. |

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection.property.connectionName"></a>

```csharp
public string ConnectionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#connection_name LakewatchDatasource#connection_name}.

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection.property.configuration"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Configuration { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#configuration LakewatchDatasource#configuration}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#start_time LakewatchDatasource#start_time}.

---

### LakewatchDatasourceUpdatedBy <a name="LakewatchDatasourceUpdatedBy" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceUpdatedBy {
    string DisplayName = null,
    string Email = null,
    string Id = null,
    string PrincipalType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#display_name LakewatchDatasource#display_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#email LakewatchDatasource#email}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.principalType">PrincipalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#principal_type LakewatchDatasource#principal_type}. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#display_name LakewatchDatasource#display_name}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#email LakewatchDatasource#email}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#id LakewatchDatasource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrincipalType`<sup>Optional</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy.property.principalType"></a>

```csharp
public string PrincipalType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_datasource#principal_type LakewatchDatasource#principal_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference <a name="LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetCatalogName">ResetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetCatalogName"></a>

```csharp
private void ResetCatalogName()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.resetSchemaName"></a>

```csharp
private void ResetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogName">CatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable">LakewatchDatasourceAutoloaderEffectiveRawTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogNameInput"></a>

```csharp
public string CatalogNameInput { get; }
```

- *Type:* string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.catalogName"></a>

```csharp
public string CatalogName { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference.property.internalValue"></a>

```csharp
public LakewatchDatasourceAutoloaderEffectiveRawTable InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTable">LakewatchDatasourceAutoloaderEffectiveRawTable</a>

---


### LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference <a name="LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resetHeaderRetention">ResetHeaderRetention</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeaderRetention` <a name="ResetHeaderRetention" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.resetHeaderRetention"></a>

```csharp
private void ResetHeaderRetention()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetentionInput">HeaderRetentionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetention">HeaderRetention</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderRetentionInput`<sup>Optional</sup> <a name="HeaderRetentionInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetentionInput"></a>

```csharp
public bool|IResolvable HeaderRetentionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HeaderRetention`<sup>Required</sup> <a name="HeaderRetention" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetention"></a>

```csharp
public bool|IResolvable HeaderRetention { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a>

---


### LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference <a name="LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray">LakewatchDatasourceAutoloaderEnvelopeJsonArray</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakewatchDatasourceAutoloaderEnvelopeJsonArray InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray">LakewatchDatasourceAutoloaderEnvelopeJsonArray</a>

---


### LakewatchDatasourceAutoloaderEnvelopeOutputReference <a name="LakewatchDatasourceAutoloaderEnvelopeOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceAutoloaderEnvelopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.putCloudWatchLogs">PutCloudWatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.putJsonArray">PutJsonArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.resetCloudWatchLogs">ResetCloudWatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.resetJsonArray">ResetJsonArray</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudWatchLogs` <a name="PutCloudWatchLogs" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.putCloudWatchLogs"></a>

```csharp
private void PutCloudWatchLogs(LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.putCloudWatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a>

---

##### `PutJsonArray` <a name="PutJsonArray" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.putJsonArray"></a>

```csharp
private void PutJsonArray(LakewatchDatasourceAutoloaderEnvelopeJsonArray Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.putJsonArray.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray">LakewatchDatasourceAutoloaderEnvelopeJsonArray</a>

---

##### `ResetCloudWatchLogs` <a name="ResetCloudWatchLogs" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.resetCloudWatchLogs"></a>

```csharp
private void ResetCloudWatchLogs()
```

##### `ResetJsonArray` <a name="ResetJsonArray" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.resetJsonArray"></a>

```csharp
private void ResetJsonArray()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogs">CloudWatchLogs</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArray">JsonArray</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference">LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogsInput">CloudWatchLogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArrayInput">JsonArrayInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray">LakewatchDatasourceAutoloaderEnvelopeJsonArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope">LakewatchDatasourceAutoloaderEnvelope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudWatchLogs`<sup>Required</sup> <a name="CloudWatchLogs" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogs"></a>

```csharp
public LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference CloudWatchLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogsOutputReference</a>

---

##### `JsonArray`<sup>Required</sup> <a name="JsonArray" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArray"></a>

```csharp
public LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference JsonArray { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference">LakewatchDatasourceAutoloaderEnvelopeJsonArrayOutputReference</a>

---

##### `CloudWatchLogsInput`<sup>Optional</sup> <a name="CloudWatchLogsInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.cloudWatchLogsInput"></a>

```csharp
public IResolvable|LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs CloudWatchLogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs">LakewatchDatasourceAutoloaderEnvelopeCloudWatchLogs</a>

---

##### `JsonArrayInput`<sup>Optional</sup> <a name="JsonArrayInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.jsonArrayInput"></a>

```csharp
public IResolvable|LakewatchDatasourceAutoloaderEnvelopeJsonArray JsonArrayInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeJsonArray">LakewatchDatasourceAutoloaderEnvelopeJsonArray</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakewatchDatasourceAutoloaderEnvelope InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope">LakewatchDatasourceAutoloaderEnvelope</a>

---


### LakewatchDatasourceAutoloaderOutputReference <a name="LakewatchDatasourceAutoloaderOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceAutoloaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.putEnvelope">PutEnvelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.putRawTable">PutRawTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetAwsSecretScope">ResetAwsSecretScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetEnvelope">ResetEnvelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetFormatOptions">ResetFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetIncludeExistingFiles">ResetIncludeExistingFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetOverridePartitionColumns">ResetOverridePartitionColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetQueueUrl">ResetQueueUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetServiceCredentials">ResetServiceCredentials</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnvelope` <a name="PutEnvelope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.putEnvelope"></a>

```csharp
private void PutEnvelope(LakewatchDatasourceAutoloaderEnvelope Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.putEnvelope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope">LakewatchDatasourceAutoloaderEnvelope</a>

---

##### `PutRawTable` <a name="PutRawTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.putRawTable"></a>

```csharp
private void PutRawTable(LakewatchDatasourceAutoloaderRawTable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.putRawTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable">LakewatchDatasourceAutoloaderRawTable</a>

---

##### `ResetAwsSecretScope` <a name="ResetAwsSecretScope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetAwsSecretScope"></a>

```csharp
private void ResetAwsSecretScope()
```

##### `ResetEnvelope` <a name="ResetEnvelope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetEnvelope"></a>

```csharp
private void ResetEnvelope()
```

##### `ResetFormatOptions` <a name="ResetFormatOptions" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetFormatOptions"></a>

```csharp
private void ResetFormatOptions()
```

##### `ResetIncludeExistingFiles` <a name="ResetIncludeExistingFiles" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetIncludeExistingFiles"></a>

```csharp
private void ResetIncludeExistingFiles()
```

##### `ResetOverridePartitionColumns` <a name="ResetOverridePartitionColumns" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetOverridePartitionColumns"></a>

```csharp
private void ResetOverridePartitionColumns()
```

##### `ResetQueueUrl` <a name="ResetQueueUrl" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetQueueUrl"></a>

```csharp
private void ResetQueueUrl()
```

##### `ResetServiceCredentials` <a name="ResetServiceCredentials" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.resetServiceCredentials"></a>

```csharp
private void ResetServiceCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.effectiveIncludeExistingFiles">EffectiveIncludeExistingFiles</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.effectiveRawTable">EffectiveRawTable</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference">LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.envelope">Envelope</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference">LakewatchDatasourceAutoloaderEnvelopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.rawTable">RawTable</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference">LakewatchDatasourceAutoloaderRawTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.awsSecretScopeInput">AwsSecretScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.envelopeInput">EnvelopeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope">LakewatchDatasourceAutoloaderEnvelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.formatOptionsInput">FormatOptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.includeExistingFilesInput">IncludeExistingFilesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumnsInput">OverridePartitionColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.queueUrlInput">QueueUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.rawTableInput">RawTableInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable">LakewatchDatasourceAutoloaderRawTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.serviceCredentialsInput">ServiceCredentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.awsSecretScope">AwsSecretScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.formatOptions">FormatOptions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.includeExistingFiles">IncludeExistingFiles</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumns">OverridePartitionColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.queueUrl">QueueUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.serviceCredentials">ServiceCredentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader">LakewatchDatasourceAutoloader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectiveIncludeExistingFiles`<sup>Required</sup> <a name="EffectiveIncludeExistingFiles" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.effectiveIncludeExistingFiles"></a>

```csharp
public IResolvable EffectiveIncludeExistingFiles { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EffectiveRawTable`<sup>Required</sup> <a name="EffectiveRawTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.effectiveRawTable"></a>

```csharp
public LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference EffectiveRawTable { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference">LakewatchDatasourceAutoloaderEffectiveRawTableOutputReference</a>

---

##### `Envelope`<sup>Required</sup> <a name="Envelope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.envelope"></a>

```csharp
public LakewatchDatasourceAutoloaderEnvelopeOutputReference Envelope { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelopeOutputReference">LakewatchDatasourceAutoloaderEnvelopeOutputReference</a>

---

##### `RawTable`<sup>Required</sup> <a name="RawTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.rawTable"></a>

```csharp
public LakewatchDatasourceAutoloaderRawTableOutputReference RawTable { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference">LakewatchDatasourceAutoloaderRawTableOutputReference</a>

---

##### `AwsSecretScopeInput`<sup>Optional</sup> <a name="AwsSecretScopeInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.awsSecretScopeInput"></a>

```csharp
public string AwsSecretScopeInput { get; }
```

- *Type:* string

---

##### `EnvelopeInput`<sup>Optional</sup> <a name="EnvelopeInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.envelopeInput"></a>

```csharp
public IResolvable|LakewatchDatasourceAutoloaderEnvelope EnvelopeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderEnvelope">LakewatchDatasourceAutoloaderEnvelope</a>

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `FormatOptionsInput`<sup>Optional</sup> <a name="FormatOptionsInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.formatOptionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FormatOptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IncludeExistingFilesInput`<sup>Optional</sup> <a name="IncludeExistingFilesInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.includeExistingFilesInput"></a>

```csharp
public bool|IResolvable IncludeExistingFilesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OverridePartitionColumnsInput`<sup>Optional</sup> <a name="OverridePartitionColumnsInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumnsInput"></a>

```csharp
public string[] OverridePartitionColumnsInput { get; }
```

- *Type:* string[]

---

##### `QueueUrlInput`<sup>Optional</sup> <a name="QueueUrlInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.queueUrlInput"></a>

```csharp
public string QueueUrlInput { get; }
```

- *Type:* string

---

##### `RawTableInput`<sup>Optional</sup> <a name="RawTableInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.rawTableInput"></a>

```csharp
public IResolvable|LakewatchDatasourceAutoloaderRawTable RawTableInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable">LakewatchDatasourceAutoloaderRawTable</a>

---

##### `ServiceCredentialsInput`<sup>Optional</sup> <a name="ServiceCredentialsInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.serviceCredentialsInput"></a>

```csharp
public string ServiceCredentialsInput { get; }
```

- *Type:* string

---

##### `AwsSecretScope`<sup>Required</sup> <a name="AwsSecretScope" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.awsSecretScope"></a>

```csharp
public string AwsSecretScope { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `FormatOptions`<sup>Required</sup> <a name="FormatOptions" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.formatOptions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FormatOptions { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IncludeExistingFiles`<sup>Required</sup> <a name="IncludeExistingFiles" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.includeExistingFiles"></a>

```csharp
public bool|IResolvable IncludeExistingFiles { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `OverridePartitionColumns`<sup>Required</sup> <a name="OverridePartitionColumns" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.overridePartitionColumns"></a>

```csharp
public string[] OverridePartitionColumns { get; }
```

- *Type:* string[]

---

##### `QueueUrl`<sup>Required</sup> <a name="QueueUrl" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.queueUrl"></a>

```csharp
public string QueueUrl { get; }
```

- *Type:* string

---

##### `ServiceCredentials`<sup>Required</sup> <a name="ServiceCredentials" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.serviceCredentials"></a>

```csharp
public string ServiceCredentials { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakewatchDatasourceAutoloader InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloader">LakewatchDatasourceAutoloader</a>

---


### LakewatchDatasourceAutoloaderRawTableOutputReference <a name="LakewatchDatasourceAutoloaderRawTableOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceAutoloaderRawTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.resetCatalogName">ResetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.resetCatalogName"></a>

```csharp
private void ResetCatalogName()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.resetSchemaName"></a>

```csharp
private void ResetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogName">CatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable">LakewatchDatasourceAutoloaderRawTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogNameInput"></a>

```csharp
public string CatalogNameInput { get; }
```

- *Type:* string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.catalogName"></a>

```csharp
public string CatalogName { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTableOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakewatchDatasourceAutoloaderRawTable InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceAutoloaderRawTable">LakewatchDatasourceAutoloaderRawTable</a>

---


### LakewatchDatasourceCreatedByOutputReference <a name="LakewatchDatasourceCreatedByOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetPrincipalType">ResetPrincipalType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrincipalType` <a name="ResetPrincipalType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.resetPrincipalType"></a>

```csharp
private void ResetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.principalTypeInput">PrincipalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.principalType">PrincipalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy">LakewatchDatasourceCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrincipalTypeInput`<sup>Optional</sup> <a name="PrincipalTypeInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.principalTypeInput"></a>

```csharp
public string PrincipalTypeInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.principalType"></a>

```csharp
public string PrincipalType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedByOutputReference.property.internalValue"></a>

```csharp
public LakewatchDatasourceCreatedBy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceCreatedBy">LakewatchDatasourceCreatedBy</a>

---


### LakewatchDatasourceExistingTableOutputReference <a name="LakewatchDatasourceExistingTableOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceExistingTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resetIncludeExistingRows">ResetIncludeExistingRows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resetCatalog"></a>

```csharp
private void ResetCatalog()
```

##### `ResetIncludeExistingRows` <a name="ResetIncludeExistingRows" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resetIncludeExistingRows"></a>

```csharp
private void ResetIncludeExistingRows()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.resetSchema"></a>

```csharp
private void ResetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.effectiveCatalog">EffectiveCatalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.effectiveName">EffectiveName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.effectiveSchema">EffectiveSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.catalogInput">CatalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.includeExistingRowsInput">IncludeExistingRowsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.catalog">Catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.includeExistingRows">IncludeExistingRows</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable">LakewatchDatasourceExistingTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectiveCatalog`<sup>Required</sup> <a name="EffectiveCatalog" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.effectiveCatalog"></a>

```csharp
public string EffectiveCatalog { get; }
```

- *Type:* string

---

##### `EffectiveName`<sup>Required</sup> <a name="EffectiveName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.effectiveName"></a>

```csharp
public string EffectiveName { get; }
```

- *Type:* string

---

##### `EffectiveSchema`<sup>Required</sup> <a name="EffectiveSchema" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.effectiveSchema"></a>

```csharp
public string EffectiveSchema { get; }
```

- *Type:* string

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.catalogInput"></a>

```csharp
public string CatalogInput { get; }
```

- *Type:* string

---

##### `IncludeExistingRowsInput`<sup>Optional</sup> <a name="IncludeExistingRowsInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.includeExistingRowsInput"></a>

```csharp
public bool|IResolvable IncludeExistingRowsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.catalog"></a>

```csharp
public string Catalog { get; }
```

- *Type:* string

---

##### `IncludeExistingRows`<sup>Required</sup> <a name="IncludeExistingRows" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.includeExistingRows"></a>

```csharp
public bool|IResolvable IncludeExistingRows { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTableOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakewatchDatasourceExistingTable InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceExistingTable">LakewatchDatasourceExistingTable</a>

---


### LakewatchDatasourceOwnerOutputReference <a name="LakewatchDatasourceOwnerOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceOwnerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetPrincipalType">ResetPrincipalType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrincipalType` <a name="ResetPrincipalType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.resetPrincipalType"></a>

```csharp
private void ResetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.principalTypeInput">PrincipalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.principalType">PrincipalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner">LakewatchDatasourceOwner</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrincipalTypeInput`<sup>Optional</sup> <a name="PrincipalTypeInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.principalTypeInput"></a>

```csharp
public string PrincipalTypeInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.principalType"></a>

```csharp
public string PrincipalType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwnerOutputReference.property.internalValue"></a>

```csharp
public LakewatchDatasourceOwner InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceOwner">LakewatchDatasourceOwner</a>

---


### LakewatchDatasourceParsersEffectiveTargetTableOutputReference <a name="LakewatchDatasourceParsersEffectiveTargetTableOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceParsersEffectiveTargetTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetCatalogName">ResetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetCatalogName"></a>

```csharp
private void ResetCatalogName()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.resetSchemaName"></a>

```csharp
private void ResetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogName">CatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable">LakewatchDatasourceParsersEffectiveTargetTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogNameInput"></a>

```csharp
public string CatalogNameInput { get; }
```

- *Type:* string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.catalogName"></a>

```csharp
public string CatalogName { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference.property.internalValue"></a>

```csharp
public LakewatchDatasourceParsersEffectiveTargetTable InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTable">LakewatchDatasourceParsersEffectiveTargetTable</a>

---


### LakewatchDatasourceParsersList <a name="LakewatchDatasourceParsersList" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceParsersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.get"></a>

```csharp
private LakewatchDatasourceParsersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersList.property.internalValue"></a>

```csharp
public IResolvable|LakewatchDatasourceParsers[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>[]

---


### LakewatchDatasourceParsersOutputReference <a name="LakewatchDatasourceParsersOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceParsersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.putTargetTable">PutTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.resetTargetTable">ResetTargetTable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetTable` <a name="PutTargetTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.putTargetTable"></a>

```csharp
private void PutTargetTable(LakewatchDatasourceParsersTargetTable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.putTargetTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable">LakewatchDatasourceParsersTargetTable</a>

---

##### `ResetTargetTable` <a name="ResetTargetTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.resetTargetTable"></a>

```csharp
private void ResetTargetTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.effectiveTargetTable">EffectiveTargetTable</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference">LakewatchDatasourceParsersEffectiveTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.targetTable">TargetTable</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference">LakewatchDatasourceParsersTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.targetTableInput">TargetTableInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable">LakewatchDatasourceParsersTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectiveTargetTable`<sup>Required</sup> <a name="EffectiveTargetTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.effectiveTargetTable"></a>

```csharp
public LakewatchDatasourceParsersEffectiveTargetTableOutputReference EffectiveTargetTable { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersEffectiveTargetTableOutputReference">LakewatchDatasourceParsersEffectiveTargetTableOutputReference</a>

---

##### `TargetTable`<sup>Required</sup> <a name="TargetTable" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.targetTable"></a>

```csharp
public LakewatchDatasourceParsersTargetTableOutputReference TargetTable { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference">LakewatchDatasourceParsersTargetTableOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TargetTableInput`<sup>Optional</sup> <a name="TargetTableInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.targetTableInput"></a>

```csharp
public IResolvable|LakewatchDatasourceParsersTargetTable TargetTableInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable">LakewatchDatasourceParsersTargetTable</a>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakewatchDatasourceParsers InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsers">LakewatchDatasourceParsers</a>

---


### LakewatchDatasourceParsersTargetTableOutputReference <a name="LakewatchDatasourceParsersTargetTableOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceParsersTargetTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.resetCatalogName">ResetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.resetCatalogName"></a>

```csharp
private void ResetCatalogName()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.resetSchemaName"></a>

```csharp
private void ResetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.catalogName">CatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable">LakewatchDatasourceParsersTargetTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.catalogNameInput"></a>

```csharp
public string CatalogNameInput { get; }
```

- *Type:* string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.catalogName"></a>

```csharp
public string CatalogName { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTableOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakewatchDatasourceParsersTargetTable InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceParsersTargetTable">LakewatchDatasourceParsersTargetTable</a>

---


### LakewatchDatasourceProviderConfigOutputReference <a name="LakewatchDatasourceProviderConfigOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig">LakewatchDatasourceProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakewatchDatasourceProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceProviderConfig">LakewatchDatasourceProviderConfig</a>

---


### LakewatchDatasourceScheduleOutputReference <a name="LakewatchDatasourceScheduleOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetAtLeastEvery">ResetAtLeastEvery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetComputeGroup">ResetComputeGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetContinuous">ResetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetCronExpression">ResetCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAtLeastEvery` <a name="ResetAtLeastEvery" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetAtLeastEvery"></a>

```csharp
private void ResetAtLeastEvery()
```

##### `ResetComputeGroup` <a name="ResetComputeGroup" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetComputeGroup"></a>

```csharp
private void ResetComputeGroup()
```

##### `ResetContinuous` <a name="ResetContinuous" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetContinuous"></a>

```csharp
private void ResetContinuous()
```

##### `ResetCronExpression` <a name="ResetCronExpression" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetCronExpression"></a>

```csharp
private void ResetCronExpression()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.atLeastEveryInput">AtLeastEveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.computeGroupInput">ComputeGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.continuousInput">ContinuousInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.cronExpressionInput">CronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.atLeastEvery">AtLeastEvery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.computeGroup">ComputeGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.continuous">Continuous</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.cronExpression">CronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule">LakewatchDatasourceSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AtLeastEveryInput`<sup>Optional</sup> <a name="AtLeastEveryInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.atLeastEveryInput"></a>

```csharp
public string AtLeastEveryInput { get; }
```

- *Type:* string

---

##### `ComputeGroupInput`<sup>Optional</sup> <a name="ComputeGroupInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.computeGroupInput"></a>

```csharp
public string ComputeGroupInput { get; }
```

- *Type:* string

---

##### `ContinuousInput`<sup>Optional</sup> <a name="ContinuousInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.continuousInput"></a>

```csharp
public bool|IResolvable ContinuousInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CronExpressionInput`<sup>Optional</sup> <a name="CronExpressionInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.cronExpressionInput"></a>

```csharp
public string CronExpressionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AtLeastEvery`<sup>Required</sup> <a name="AtLeastEvery" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.atLeastEvery"></a>

```csharp
public string AtLeastEvery { get; }
```

- *Type:* string

---

##### `ComputeGroup`<sup>Required</sup> <a name="ComputeGroup" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.computeGroup"></a>

```csharp
public string ComputeGroup { get; }
```

- *Type:* string

---

##### `Continuous`<sup>Required</sup> <a name="Continuous" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.continuous"></a>

```csharp
public bool|IResolvable Continuous { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.cronExpression"></a>

```csharp
public string CronExpression { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceScheduleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakewatchDatasourceSchedule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceSchedule">LakewatchDatasourceSchedule</a>

---


### LakewatchDatasourceStatusIngestionJobOutputReference <a name="LakewatchDatasourceStatusIngestionJobOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceStatusIngestionJobOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.jobId">JobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastCompleteTime">LastCompleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastErrorMessage">LastErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastStartTime">LastStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastStatusChangeTime">LastStatusChangeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lifecycleState">LifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.pipelineId">PipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.runState">RunState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJob">LakewatchDatasourceStatusIngestionJob</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.jobId"></a>

```csharp
public string JobId { get; }
```

- *Type:* string

---

##### `LastCompleteTime`<sup>Required</sup> <a name="LastCompleteTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastCompleteTime"></a>

```csharp
public string LastCompleteTime { get; }
```

- *Type:* string

---

##### `LastErrorMessage`<sup>Required</sup> <a name="LastErrorMessage" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastErrorMessage"></a>

```csharp
public string LastErrorMessage { get; }
```

- *Type:* string

---

##### `LastStartTime`<sup>Required</sup> <a name="LastStartTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastStartTime"></a>

```csharp
public string LastStartTime { get; }
```

- *Type:* string

---

##### `LastStatusChangeTime`<sup>Required</sup> <a name="LastStatusChangeTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lastStatusChangeTime"></a>

```csharp
public string LastStatusChangeTime { get; }
```

- *Type:* string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.lifecycleState"></a>

```csharp
public string LifecycleState { get; }
```

- *Type:* string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.pipelineId"></a>

```csharp
public string PipelineId { get; }
```

- *Type:* string

---

##### `RunState`<sup>Required</sup> <a name="RunState" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.runState"></a>

```csharp
public string RunState { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference.property.internalValue"></a>

```csharp
public LakewatchDatasourceStatusIngestionJob InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJob">LakewatchDatasourceStatusIngestionJob</a>

---


### LakewatchDatasourceStatusIngestionPipelineOutputReference <a name="LakewatchDatasourceStatusIngestionPipelineOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceStatusIngestionPipelineOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.jobId">JobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastCompleteTime">LastCompleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastErrorMessage">LastErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStartTime">LastStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStatusChangeTime">LastStatusChangeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lifecycleState">LifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.pipelineId">PipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.runState">RunState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipeline">LakewatchDatasourceStatusIngestionPipeline</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.jobId"></a>

```csharp
public string JobId { get; }
```

- *Type:* string

---

##### `LastCompleteTime`<sup>Required</sup> <a name="LastCompleteTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastCompleteTime"></a>

```csharp
public string LastCompleteTime { get; }
```

- *Type:* string

---

##### `LastErrorMessage`<sup>Required</sup> <a name="LastErrorMessage" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastErrorMessage"></a>

```csharp
public string LastErrorMessage { get; }
```

- *Type:* string

---

##### `LastStartTime`<sup>Required</sup> <a name="LastStartTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStartTime"></a>

```csharp
public string LastStartTime { get; }
```

- *Type:* string

---

##### `LastStatusChangeTime`<sup>Required</sup> <a name="LastStatusChangeTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lastStatusChangeTime"></a>

```csharp
public string LastStatusChangeTime { get; }
```

- *Type:* string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.lifecycleState"></a>

```csharp
public string LifecycleState { get; }
```

- *Type:* string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.pipelineId"></a>

```csharp
public string PipelineId { get; }
```

- *Type:* string

---

##### `RunState`<sup>Required</sup> <a name="RunState" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.runState"></a>

```csharp
public string RunState { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference.property.internalValue"></a>

```csharp
public LakewatchDatasourceStatusIngestionPipeline InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipeline">LakewatchDatasourceStatusIngestionPipeline</a>

---


### LakewatchDatasourceStatusOutputReference <a name="LakewatchDatasourceStatusOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.ingestionJob">IngestionJob</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference">LakewatchDatasourceStatusIngestionJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.ingestionPipeline">IngestionPipeline</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference">LakewatchDatasourceStatusIngestionPipelineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatus">LakewatchDatasourceStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IngestionJob`<sup>Required</sup> <a name="IngestionJob" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.ingestionJob"></a>

```csharp
public LakewatchDatasourceStatusIngestionJobOutputReference IngestionJob { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionJobOutputReference">LakewatchDatasourceStatusIngestionJobOutputReference</a>

---

##### `IngestionPipeline`<sup>Required</sup> <a name="IngestionPipeline" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.ingestionPipeline"></a>

```csharp
public LakewatchDatasourceStatusIngestionPipelineOutputReference IngestionPipeline { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusIngestionPipelineOutputReference">LakewatchDatasourceStatusIngestionPipelineOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatusOutputReference.property.internalValue"></a>

```csharp
public LakewatchDatasourceStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceStatus">LakewatchDatasourceStatus</a>

---


### LakewatchDatasourceUnityCatalogConnectionOutputReference <a name="LakewatchDatasourceUnityCatalogConnectionOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceUnityCatalogConnectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.resetConfiguration"></a>

```csharp
private void ResetConfiguration()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.connector">Connector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.effectiveStartTime">EffectiveStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.configurationInput">ConfigurationInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.configuration">Configuration</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionName">ConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection">LakewatchDatasourceUnityCatalogConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Connector`<sup>Required</sup> <a name="Connector" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.connector"></a>

```csharp
public string Connector { get; }
```

- *Type:* string

---

##### `EffectiveStartTime`<sup>Required</sup> <a name="EffectiveStartTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.effectiveStartTime"></a>

```csharp
public string EffectiveStartTime { get; }
```

- *Type:* string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.configurationInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConfigurationInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionNameInput"></a>

```csharp
public string ConnectionNameInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.configuration"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Configuration { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.connectionName"></a>

```csharp
public string ConnectionName { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnectionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakewatchDatasourceUnityCatalogConnection InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUnityCatalogConnection">LakewatchDatasourceUnityCatalogConnection</a>

---


### LakewatchDatasourceUpdatedByOutputReference <a name="LakewatchDatasourceUpdatedByOutputReference" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new LakewatchDatasourceUpdatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetPrincipalType">ResetPrincipalType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrincipalType` <a name="ResetPrincipalType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.resetPrincipalType"></a>

```csharp
private void ResetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.principalTypeInput">PrincipalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.principalType">PrincipalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy">LakewatchDatasourceUpdatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrincipalTypeInput`<sup>Optional</sup> <a name="PrincipalTypeInput" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.principalTypeInput"></a>

```csharp
public string PrincipalTypeInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.principalType"></a>

```csharp
public string PrincipalType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedByOutputReference.property.internalValue"></a>

```csharp
public LakewatchDatasourceUpdatedBy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchDatasource.LakewatchDatasourceUpdatedBy">LakewatchDatasourceUpdatedBy</a>

---



