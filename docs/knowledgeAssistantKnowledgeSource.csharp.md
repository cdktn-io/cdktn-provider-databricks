# `knowledgeAssistantKnowledgeSource` Submodule <a name="`knowledgeAssistantKnowledgeSource` Submodule" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KnowledgeAssistantKnowledgeSource <a name="KnowledgeAssistantKnowledgeSource" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source databricks_knowledge_assistant_knowledge_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new KnowledgeAssistantKnowledgeSource(Construct Scope, string Id, KnowledgeAssistantKnowledgeSourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig">KnowledgeAssistantKnowledgeSourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig">KnowledgeAssistantKnowledgeSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putFiles">PutFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putFileTable">PutFileTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putIndex">PutIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.resetFiles">ResetFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.resetFileTable">ResetFileTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.resetIndex">ResetIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFiles` <a name="PutFiles" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putFiles"></a>

```csharp
private void PutFiles(KnowledgeAssistantKnowledgeSourceFiles Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putFiles.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles">KnowledgeAssistantKnowledgeSourceFiles</a>

---

##### `PutFileTable` <a name="PutFileTable" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putFileTable"></a>

```csharp
private void PutFileTable(KnowledgeAssistantKnowledgeSourceFileTable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putFileTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable">KnowledgeAssistantKnowledgeSourceFileTable</a>

---

##### `PutIndex` <a name="PutIndex" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putIndex"></a>

```csharp
private void PutIndex(KnowledgeAssistantKnowledgeSourceIndex Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putIndex.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex">KnowledgeAssistantKnowledgeSourceIndex</a>

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putProviderConfig"></a>

```csharp
private void PutProviderConfig(KnowledgeAssistantKnowledgeSourceProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig">KnowledgeAssistantKnowledgeSourceProviderConfig</a>

---

##### `ResetFiles` <a name="ResetFiles" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.resetFiles"></a>

```csharp
private void ResetFiles()
```

##### `ResetFileTable` <a name="ResetFileTable" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.resetFileTable"></a>

```csharp
private void ResetFileTable()
```

##### `ResetIndex` <a name="ResetIndex" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.resetIndex"></a>

```csharp
private void ResetIndex()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KnowledgeAssistantKnowledgeSource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

KnowledgeAssistantKnowledgeSource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

KnowledgeAssistantKnowledgeSource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

KnowledgeAssistantKnowledgeSource.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

KnowledgeAssistantKnowledgeSource.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a KnowledgeAssistantKnowledgeSource resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KnowledgeAssistantKnowledgeSource to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KnowledgeAssistantKnowledgeSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the KnowledgeAssistantKnowledgeSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.files">Files</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference">KnowledgeAssistantKnowledgeSourceFilesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.fileTable">FileTable</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference">KnowledgeAssistantKnowledgeSourceFileTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.index">Index</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference">KnowledgeAssistantKnowledgeSourceIndexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.knowledgeCutoffTime">KnowledgeCutoffTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference">KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.filesInput">FilesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles">KnowledgeAssistantKnowledgeSourceFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.fileTableInput">FileTableInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable">KnowledgeAssistantKnowledgeSourceFileTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.indexInput">IndexInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex">KnowledgeAssistantKnowledgeSourceIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig">KnowledgeAssistantKnowledgeSourceProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.sourceTypeInput">SourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Files`<sup>Required</sup> <a name="Files" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.files"></a>

```csharp
public KnowledgeAssistantKnowledgeSourceFilesOutputReference Files { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference">KnowledgeAssistantKnowledgeSourceFilesOutputReference</a>

---

##### `FileTable`<sup>Required</sup> <a name="FileTable" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.fileTable"></a>

```csharp
public KnowledgeAssistantKnowledgeSourceFileTableOutputReference FileTable { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference">KnowledgeAssistantKnowledgeSourceFileTableOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.index"></a>

```csharp
public KnowledgeAssistantKnowledgeSourceIndexOutputReference Index { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference">KnowledgeAssistantKnowledgeSourceIndexOutputReference</a>

---

##### `KnowledgeCutoffTime`<sup>Required</sup> <a name="KnowledgeCutoffTime" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.knowledgeCutoffTime"></a>

```csharp
public string KnowledgeCutoffTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.providerConfig"></a>

```csharp
public KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference">KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilesInput`<sup>Optional</sup> <a name="FilesInput" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.filesInput"></a>

```csharp
public IResolvable|KnowledgeAssistantKnowledgeSourceFiles FilesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles">KnowledgeAssistantKnowledgeSourceFiles</a>

---

##### `FileTableInput`<sup>Optional</sup> <a name="FileTableInput" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.fileTableInput"></a>

```csharp
public IResolvable|KnowledgeAssistantKnowledgeSourceFileTable FileTableInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable">KnowledgeAssistantKnowledgeSourceFileTable</a>

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.indexInput"></a>

```csharp
public IResolvable|KnowledgeAssistantKnowledgeSourceIndex IndexInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex">KnowledgeAssistantKnowledgeSourceIndex</a>

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.providerConfigInput"></a>

```csharp
public IResolvable|KnowledgeAssistantKnowledgeSourceProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig">KnowledgeAssistantKnowledgeSourceProviderConfig</a>

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.sourceTypeInput"></a>

```csharp
public string SourceTypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KnowledgeAssistantKnowledgeSourceConfig <a name="KnowledgeAssistantKnowledgeSourceConfig" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new KnowledgeAssistantKnowledgeSourceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Description,
    string DisplayName,
    string Parent,
    string SourceType,
    KnowledgeAssistantKnowledgeSourceFiles Files = null,
    KnowledgeAssistantKnowledgeSourceFileTable FileTable = null,
    KnowledgeAssistantKnowledgeSourceIndex Index = null,
    KnowledgeAssistantKnowledgeSourceProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source#description KnowledgeAssistantKnowledgeSource#description}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source#display_name KnowledgeAssistantKnowledgeSource#display_name}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.parent">Parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source#parent KnowledgeAssistantKnowledgeSource#parent}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.sourceType">SourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source#source_type KnowledgeAssistantKnowledgeSource#source_type}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.files">Files</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles">KnowledgeAssistantKnowledgeSourceFiles</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source#files KnowledgeAssistantKnowledgeSource#files}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.fileTable">FileTable</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable">KnowledgeAssistantKnowledgeSourceFileTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source#file_table KnowledgeAssistantKnowledgeSource#file_table}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.index">Index</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex">KnowledgeAssistantKnowledgeSourceIndex</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source#index KnowledgeAssistantKnowledgeSource#index}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig">KnowledgeAssistantKnowledgeSourceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source#provider_config KnowledgeAssistantKnowledgeSource#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source#description KnowledgeAssistantKnowledgeSource#description}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source#display_name KnowledgeAssistantKnowledgeSource#display_name}.

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source#parent KnowledgeAssistantKnowledgeSource#parent}.

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.sourceType"></a>

```csharp
public string SourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source#source_type KnowledgeAssistantKnowledgeSource#source_type}.

---

##### `Files`<sup>Optional</sup> <a name="Files" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.files"></a>

```csharp
public KnowledgeAssistantKnowledgeSourceFiles Files { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles">KnowledgeAssistantKnowledgeSourceFiles</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source#files KnowledgeAssistantKnowledgeSource#files}.

---

##### `FileTable`<sup>Optional</sup> <a name="FileTable" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.fileTable"></a>

```csharp
public KnowledgeAssistantKnowledgeSourceFileTable FileTable { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable">KnowledgeAssistantKnowledgeSourceFileTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source#file_table KnowledgeAssistantKnowledgeSource#file_table}.

---

##### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.index"></a>

```csharp
public KnowledgeAssistantKnowledgeSourceIndex Index { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex">KnowledgeAssistantKnowledgeSourceIndex</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source#index KnowledgeAssistantKnowledgeSource#index}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.providerConfig"></a>

```csharp
public KnowledgeAssistantKnowledgeSourceProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig">KnowledgeAssistantKnowledgeSourceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source#provider_config KnowledgeAssistantKnowledgeSource#provider_config}.

---

### KnowledgeAssistantKnowledgeSourceFiles <a name="KnowledgeAssistantKnowledgeSourceFiles" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new KnowledgeAssistantKnowledgeSourceFiles {
    string Path
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source#path KnowledgeAssistantKnowledgeSource#path}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source#path KnowledgeAssistantKnowledgeSource#path}.

---

### KnowledgeAssistantKnowledgeSourceFileTable <a name="KnowledgeAssistantKnowledgeSourceFileTable" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new KnowledgeAssistantKnowledgeSourceFileTable {
    string FileCol,
    string TableName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable.property.fileCol">FileCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source#file_col KnowledgeAssistantKnowledgeSource#file_col}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable.property.tableName">TableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source#table_name KnowledgeAssistantKnowledgeSource#table_name}. |

---

##### `FileCol`<sup>Required</sup> <a name="FileCol" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable.property.fileCol"></a>

```csharp
public string FileCol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source#file_col KnowledgeAssistantKnowledgeSource#file_col}.

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source#table_name KnowledgeAssistantKnowledgeSource#table_name}.

---

### KnowledgeAssistantKnowledgeSourceIndex <a name="KnowledgeAssistantKnowledgeSourceIndex" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new KnowledgeAssistantKnowledgeSourceIndex {
    string DocUriCol,
    string IndexName,
    string TextCol
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex.property.docUriCol">DocUriCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source#doc_uri_col KnowledgeAssistantKnowledgeSource#doc_uri_col}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex.property.indexName">IndexName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source#index_name KnowledgeAssistantKnowledgeSource#index_name}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex.property.textCol">TextCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source#text_col KnowledgeAssistantKnowledgeSource#text_col}. |

---

##### `DocUriCol`<sup>Required</sup> <a name="DocUriCol" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex.property.docUriCol"></a>

```csharp
public string DocUriCol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source#doc_uri_col KnowledgeAssistantKnowledgeSource#doc_uri_col}.

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex.property.indexName"></a>

```csharp
public string IndexName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source#index_name KnowledgeAssistantKnowledgeSource#index_name}.

---

##### `TextCol`<sup>Required</sup> <a name="TextCol" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex.property.textCol"></a>

```csharp
public string TextCol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source#text_col KnowledgeAssistantKnowledgeSource#text_col}.

---

### KnowledgeAssistantKnowledgeSourceProviderConfig <a name="KnowledgeAssistantKnowledgeSourceProviderConfig" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new KnowledgeAssistantKnowledgeSourceProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source#workspace_id KnowledgeAssistantKnowledgeSource#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/knowledge_assistant_knowledge_source#workspace_id KnowledgeAssistantKnowledgeSource#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### KnowledgeAssistantKnowledgeSourceFilesOutputReference <a name="KnowledgeAssistantKnowledgeSourceFilesOutputReference" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new KnowledgeAssistantKnowledgeSourceFilesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles">KnowledgeAssistantKnowledgeSourceFiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KnowledgeAssistantKnowledgeSourceFiles InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles">KnowledgeAssistantKnowledgeSourceFiles</a>

---


### KnowledgeAssistantKnowledgeSourceFileTableOutputReference <a name="KnowledgeAssistantKnowledgeSourceFileTableOutputReference" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new KnowledgeAssistantKnowledgeSourceFileTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fileColInput">FileColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fileCol">FileCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable">KnowledgeAssistantKnowledgeSourceFileTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileColInput`<sup>Optional</sup> <a name="FileColInput" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fileColInput"></a>

```csharp
public string FileColInput { get; }
```

- *Type:* string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `FileCol`<sup>Required</sup> <a name="FileCol" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fileCol"></a>

```csharp
public string FileCol { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KnowledgeAssistantKnowledgeSourceFileTable InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable">KnowledgeAssistantKnowledgeSourceFileTable</a>

---


### KnowledgeAssistantKnowledgeSourceIndexOutputReference <a name="KnowledgeAssistantKnowledgeSourceIndexOutputReference" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new KnowledgeAssistantKnowledgeSourceIndexOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.docUriColInput">DocUriColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.indexNameInput">IndexNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.textColInput">TextColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.docUriCol">DocUriCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.indexName">IndexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.textCol">TextCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex">KnowledgeAssistantKnowledgeSourceIndex</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DocUriColInput`<sup>Optional</sup> <a name="DocUriColInput" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.docUriColInput"></a>

```csharp
public string DocUriColInput { get; }
```

- *Type:* string

---

##### `IndexNameInput`<sup>Optional</sup> <a name="IndexNameInput" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.indexNameInput"></a>

```csharp
public string IndexNameInput { get; }
```

- *Type:* string

---

##### `TextColInput`<sup>Optional</sup> <a name="TextColInput" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.textColInput"></a>

```csharp
public string TextColInput { get; }
```

- *Type:* string

---

##### `DocUriCol`<sup>Required</sup> <a name="DocUriCol" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.docUriCol"></a>

```csharp
public string DocUriCol { get; }
```

- *Type:* string

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.indexName"></a>

```csharp
public string IndexName { get; }
```

- *Type:* string

---

##### `TextCol`<sup>Required</sup> <a name="TextCol" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.textCol"></a>

```csharp
public string TextCol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KnowledgeAssistantKnowledgeSourceIndex InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex">KnowledgeAssistantKnowledgeSourceIndex</a>

---


### KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference <a name="KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig">KnowledgeAssistantKnowledgeSourceProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KnowledgeAssistantKnowledgeSourceProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig">KnowledgeAssistantKnowledgeSourceProviderConfig</a>

---



