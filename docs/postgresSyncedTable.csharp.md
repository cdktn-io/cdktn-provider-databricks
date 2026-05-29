# `postgresSyncedTable` Submodule <a name="`postgresSyncedTable` Submodule" id="@cdktn/provider-databricks.postgresSyncedTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresSyncedTable <a name="PostgresSyncedTable" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table databricks_postgres_synced_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresSyncedTable(Construct Scope, string Id, PostgresSyncedTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig">PostgresSyncedTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig">PostgresSyncedTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.resetSpec">ResetSpec</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putProviderConfig"></a>

```csharp
private void PutProviderConfig(PostgresSyncedTableProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putSpec"></a>

```csharp
private void PutSpec(PostgresSyncedTableSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

##### `ResetSpec` <a name="ResetSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.resetSpec"></a>

```csharp
private void ResetSpec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PostgresSyncedTable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

PostgresSyncedTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

PostgresSyncedTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

PostgresSyncedTable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

PostgresSyncedTable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PostgresSyncedTable resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PostgresSyncedTable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PostgresSyncedTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PostgresSyncedTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference">PostgresSyncedTableProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference">PostgresSyncedTableSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.status">Status</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference">PostgresSyncedTableStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.specInput">SpecInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.syncedTableIdInput">SyncedTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.syncedTableId">SyncedTableId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.providerConfig"></a>

```csharp
public PostgresSyncedTableProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference">PostgresSyncedTableProviderConfigOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.spec"></a>

```csharp
public PostgresSyncedTableSpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference">PostgresSyncedTableSpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.status"></a>

```csharp
public PostgresSyncedTableStatusOutputReference Status { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference">PostgresSyncedTableStatusOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.providerConfigInput"></a>

```csharp
public IResolvable|PostgresSyncedTableProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a>

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.specInput"></a>

```csharp
public IResolvable|PostgresSyncedTableSpec SpecInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a>

---

##### `SyncedTableIdInput`<sup>Optional</sup> <a name="SyncedTableIdInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.syncedTableIdInput"></a>

```csharp
public string SyncedTableIdInput { get; }
```

- *Type:* string

---

##### `SyncedTableId`<sup>Required</sup> <a name="SyncedTableId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.syncedTableId"></a>

```csharp
public string SyncedTableId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresSyncedTableConfig <a name="PostgresSyncedTableConfig" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresSyncedTableConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string SyncedTableId,
    PostgresSyncedTableProviderConfig ProviderConfig = null,
    PostgresSyncedTableSpec Spec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.syncedTableId">SyncedTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#synced_table_id PostgresSyncedTable#synced_table_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#provider_config PostgresSyncedTable#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#spec PostgresSyncedTable#spec}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SyncedTableId`<sup>Required</sup> <a name="SyncedTableId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.syncedTableId"></a>

```csharp
public string SyncedTableId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#synced_table_id PostgresSyncedTable#synced_table_id}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.providerConfig"></a>

```csharp
public PostgresSyncedTableProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#provider_config PostgresSyncedTable#provider_config}.

---

##### `Spec`<sup>Optional</sup> <a name="Spec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.spec"></a>

```csharp
public PostgresSyncedTableSpec Spec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#spec PostgresSyncedTable#spec}.

---

### PostgresSyncedTableProviderConfig <a name="PostgresSyncedTableProviderConfig" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresSyncedTableProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#workspace_id PostgresSyncedTable#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#workspace_id PostgresSyncedTable#workspace_id}.

---

### PostgresSyncedTableSpec <a name="PostgresSyncedTableSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresSyncedTableSpec {
    string Branch = null,
    bool|IResolvable CreateDatabaseObjectsIfMissing = null,
    string ExistingPipelineId = null,
    PostgresSyncedTableSpecNewPipelineSpec NewPipelineSpec = null,
    string PostgresDatabase = null,
    string[] PrimaryKeyColumns = null,
    string SchedulingPolicy = null,
    string SourceTableFullName = null,
    string TimeseriesKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.branch">Branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#branch PostgresSyncedTable#branch}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.createDatabaseObjectsIfMissing">CreateDatabaseObjectsIfMissing</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#create_database_objects_if_missing PostgresSyncedTable#create_database_objects_if_missing}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.existingPipelineId">ExistingPipelineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#existing_pipeline_id PostgresSyncedTable#existing_pipeline_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.newPipelineSpec">NewPipelineSpec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec">PostgresSyncedTableSpecNewPipelineSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#new_pipeline_spec PostgresSyncedTable#new_pipeline_spec}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.postgresDatabase">PostgresDatabase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#postgres_database PostgresSyncedTable#postgres_database}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.primaryKeyColumns">PrimaryKeyColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#primary_key_columns PostgresSyncedTable#primary_key_columns}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.schedulingPolicy">SchedulingPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#scheduling_policy PostgresSyncedTable#scheduling_policy}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.sourceTableFullName">SourceTableFullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#source_table_full_name PostgresSyncedTable#source_table_full_name}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.timeseriesKey">TimeseriesKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#timeseries_key PostgresSyncedTable#timeseries_key}. |

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#branch PostgresSyncedTable#branch}.

---

##### `CreateDatabaseObjectsIfMissing`<sup>Optional</sup> <a name="CreateDatabaseObjectsIfMissing" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.createDatabaseObjectsIfMissing"></a>

```csharp
public bool|IResolvable CreateDatabaseObjectsIfMissing { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#create_database_objects_if_missing PostgresSyncedTable#create_database_objects_if_missing}.

---

##### `ExistingPipelineId`<sup>Optional</sup> <a name="ExistingPipelineId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.existingPipelineId"></a>

```csharp
public string ExistingPipelineId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#existing_pipeline_id PostgresSyncedTable#existing_pipeline_id}.

---

##### `NewPipelineSpec`<sup>Optional</sup> <a name="NewPipelineSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.newPipelineSpec"></a>

```csharp
public PostgresSyncedTableSpecNewPipelineSpec NewPipelineSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec">PostgresSyncedTableSpecNewPipelineSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#new_pipeline_spec PostgresSyncedTable#new_pipeline_spec}.

---

##### `PostgresDatabase`<sup>Optional</sup> <a name="PostgresDatabase" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.postgresDatabase"></a>

```csharp
public string PostgresDatabase { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#postgres_database PostgresSyncedTable#postgres_database}.

---

##### `PrimaryKeyColumns`<sup>Optional</sup> <a name="PrimaryKeyColumns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.primaryKeyColumns"></a>

```csharp
public string[] PrimaryKeyColumns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#primary_key_columns PostgresSyncedTable#primary_key_columns}.

---

##### `SchedulingPolicy`<sup>Optional</sup> <a name="SchedulingPolicy" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.schedulingPolicy"></a>

```csharp
public string SchedulingPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#scheduling_policy PostgresSyncedTable#scheduling_policy}.

---

##### `SourceTableFullName`<sup>Optional</sup> <a name="SourceTableFullName" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.sourceTableFullName"></a>

```csharp
public string SourceTableFullName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#source_table_full_name PostgresSyncedTable#source_table_full_name}.

---

##### `TimeseriesKey`<sup>Optional</sup> <a name="TimeseriesKey" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.timeseriesKey"></a>

```csharp
public string TimeseriesKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#timeseries_key PostgresSyncedTable#timeseries_key}.

---

### PostgresSyncedTableSpecNewPipelineSpec <a name="PostgresSyncedTableSpecNewPipelineSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresSyncedTableSpecNewPipelineSpec {
    string BudgetPolicyId = null,
    string StorageCatalog = null,
    string StorageSchema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.budgetPolicyId">BudgetPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#budget_policy_id PostgresSyncedTable#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.storageCatalog">StorageCatalog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#storage_catalog PostgresSyncedTable#storage_catalog}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.storageSchema">StorageSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#storage_schema PostgresSyncedTable#storage_schema}. |

---

##### `BudgetPolicyId`<sup>Optional</sup> <a name="BudgetPolicyId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.budgetPolicyId"></a>

```csharp
public string BudgetPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#budget_policy_id PostgresSyncedTable#budget_policy_id}.

---

##### `StorageCatalog`<sup>Optional</sup> <a name="StorageCatalog" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.storageCatalog"></a>

```csharp
public string StorageCatalog { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#storage_catalog PostgresSyncedTable#storage_catalog}.

---

##### `StorageSchema`<sup>Optional</sup> <a name="StorageSchema" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.storageSchema"></a>

```csharp
public string StorageSchema { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/postgres_synced_table#storage_schema PostgresSyncedTable#storage_schema}.

---

### PostgresSyncedTableStatus <a name="PostgresSyncedTableStatus" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresSyncedTableStatus {

};
```


### PostgresSyncedTableStatusLastSync <a name="PostgresSyncedTableStatusLastSync" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSync"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSync.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresSyncedTableStatusLastSync {

};
```


### PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo <a name="PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo {

};
```


### PostgresSyncedTableStatusOngoingSyncProgress <a name="PostgresSyncedTableStatusOngoingSyncProgress" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresSyncedTableStatusOngoingSyncProgress {

};
```


## Classes <a name="Classes" id="Classes"></a>

### PostgresSyncedTableProviderConfigOutputReference <a name="PostgresSyncedTableProviderConfigOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresSyncedTableProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PostgresSyncedTableProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a>

---


### PostgresSyncedTableSpecNewPipelineSpecOutputReference <a name="PostgresSyncedTableSpecNewPipelineSpecOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresSyncedTableSpecNewPipelineSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetBudgetPolicyId">ResetBudgetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageCatalog">ResetStorageCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageSchema">ResetStorageSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBudgetPolicyId` <a name="ResetBudgetPolicyId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetBudgetPolicyId"></a>

```csharp
private void ResetBudgetPolicyId()
```

##### `ResetStorageCatalog` <a name="ResetStorageCatalog" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageCatalog"></a>

```csharp
private void ResetStorageCatalog()
```

##### `ResetStorageSchema` <a name="ResetStorageSchema" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageSchema"></a>

```csharp
private void ResetStorageSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyIdInput">BudgetPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalogInput">StorageCatalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchemaInput">StorageSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyId">BudgetPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalog">StorageCatalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchema">StorageSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec">PostgresSyncedTableSpecNewPipelineSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BudgetPolicyIdInput`<sup>Optional</sup> <a name="BudgetPolicyIdInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyIdInput"></a>

```csharp
public string BudgetPolicyIdInput { get; }
```

- *Type:* string

---

##### `StorageCatalogInput`<sup>Optional</sup> <a name="StorageCatalogInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalogInput"></a>

```csharp
public string StorageCatalogInput { get; }
```

- *Type:* string

---

##### `StorageSchemaInput`<sup>Optional</sup> <a name="StorageSchemaInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchemaInput"></a>

```csharp
public string StorageSchemaInput { get; }
```

- *Type:* string

---

##### `BudgetPolicyId`<sup>Required</sup> <a name="BudgetPolicyId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyId"></a>

```csharp
public string BudgetPolicyId { get; }
```

- *Type:* string

---

##### `StorageCatalog`<sup>Required</sup> <a name="StorageCatalog" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalog"></a>

```csharp
public string StorageCatalog { get; }
```

- *Type:* string

---

##### `StorageSchema`<sup>Required</sup> <a name="StorageSchema" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchema"></a>

```csharp
public string StorageSchema { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PostgresSyncedTableSpecNewPipelineSpec InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec">PostgresSyncedTableSpecNewPipelineSpec</a>

---


### PostgresSyncedTableSpecOutputReference <a name="PostgresSyncedTableSpecOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresSyncedTableSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putNewPipelineSpec">PutNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetCreateDatabaseObjectsIfMissing">ResetCreateDatabaseObjectsIfMissing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetExistingPipelineId">ResetExistingPipelineId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetNewPipelineSpec">ResetNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetPostgresDatabase">ResetPostgresDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetPrimaryKeyColumns">ResetPrimaryKeyColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetSchedulingPolicy">ResetSchedulingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetSourceTableFullName">ResetSourceTableFullName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetTimeseriesKey">ResetTimeseriesKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNewPipelineSpec` <a name="PutNewPipelineSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putNewPipelineSpec"></a>

```csharp
private void PutNewPipelineSpec(PostgresSyncedTableSpecNewPipelineSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putNewPipelineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec">PostgresSyncedTableSpecNewPipelineSpec</a>

---

##### `ResetBranch` <a name="ResetBranch" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetBranch"></a>

```csharp
private void ResetBranch()
```

##### `ResetCreateDatabaseObjectsIfMissing` <a name="ResetCreateDatabaseObjectsIfMissing" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetCreateDatabaseObjectsIfMissing"></a>

```csharp
private void ResetCreateDatabaseObjectsIfMissing()
```

##### `ResetExistingPipelineId` <a name="ResetExistingPipelineId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetExistingPipelineId"></a>

```csharp
private void ResetExistingPipelineId()
```

##### `ResetNewPipelineSpec` <a name="ResetNewPipelineSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetNewPipelineSpec"></a>

```csharp
private void ResetNewPipelineSpec()
```

##### `ResetPostgresDatabase` <a name="ResetPostgresDatabase" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetPostgresDatabase"></a>

```csharp
private void ResetPostgresDatabase()
```

##### `ResetPrimaryKeyColumns` <a name="ResetPrimaryKeyColumns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetPrimaryKeyColumns"></a>

```csharp
private void ResetPrimaryKeyColumns()
```

##### `ResetSchedulingPolicy` <a name="ResetSchedulingPolicy" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetSchedulingPolicy"></a>

```csharp
private void ResetSchedulingPolicy()
```

##### `ResetSourceTableFullName` <a name="ResetSourceTableFullName" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetSourceTableFullName"></a>

```csharp
private void ResetSourceTableFullName()
```

##### `ResetTimeseriesKey` <a name="ResetTimeseriesKey" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetTimeseriesKey"></a>

```csharp
private void ResetTimeseriesKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.newPipelineSpec">NewPipelineSpec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference">PostgresSyncedTableSpecNewPipelineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissingInput">CreateDatabaseObjectsIfMissingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.existingPipelineIdInput">ExistingPipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.newPipelineSpecInput">NewPipelineSpecInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec">PostgresSyncedTableSpecNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.postgresDatabaseInput">PostgresDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.primaryKeyColumnsInput">PrimaryKeyColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.schedulingPolicyInput">SchedulingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.sourceTableFullNameInput">SourceTableFullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.timeseriesKeyInput">TimeseriesKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissing">CreateDatabaseObjectsIfMissing</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.existingPipelineId">ExistingPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.postgresDatabase">PostgresDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.primaryKeyColumns">PrimaryKeyColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.schedulingPolicy">SchedulingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.sourceTableFullName">SourceTableFullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.timeseriesKey">TimeseriesKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NewPipelineSpec`<sup>Required</sup> <a name="NewPipelineSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.newPipelineSpec"></a>

```csharp
public PostgresSyncedTableSpecNewPipelineSpecOutputReference NewPipelineSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference">PostgresSyncedTableSpecNewPipelineSpecOutputReference</a>

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `CreateDatabaseObjectsIfMissingInput`<sup>Optional</sup> <a name="CreateDatabaseObjectsIfMissingInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissingInput"></a>

```csharp
public bool|IResolvable CreateDatabaseObjectsIfMissingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExistingPipelineIdInput`<sup>Optional</sup> <a name="ExistingPipelineIdInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.existingPipelineIdInput"></a>

```csharp
public string ExistingPipelineIdInput { get; }
```

- *Type:* string

---

##### `NewPipelineSpecInput`<sup>Optional</sup> <a name="NewPipelineSpecInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.newPipelineSpecInput"></a>

```csharp
public IResolvable|PostgresSyncedTableSpecNewPipelineSpec NewPipelineSpecInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec">PostgresSyncedTableSpecNewPipelineSpec</a>

---

##### `PostgresDatabaseInput`<sup>Optional</sup> <a name="PostgresDatabaseInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.postgresDatabaseInput"></a>

```csharp
public string PostgresDatabaseInput { get; }
```

- *Type:* string

---

##### `PrimaryKeyColumnsInput`<sup>Optional</sup> <a name="PrimaryKeyColumnsInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.primaryKeyColumnsInput"></a>

```csharp
public string[] PrimaryKeyColumnsInput { get; }
```

- *Type:* string[]

---

##### `SchedulingPolicyInput`<sup>Optional</sup> <a name="SchedulingPolicyInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.schedulingPolicyInput"></a>

```csharp
public string SchedulingPolicyInput { get; }
```

- *Type:* string

---

##### `SourceTableFullNameInput`<sup>Optional</sup> <a name="SourceTableFullNameInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.sourceTableFullNameInput"></a>

```csharp
public string SourceTableFullNameInput { get; }
```

- *Type:* string

---

##### `TimeseriesKeyInput`<sup>Optional</sup> <a name="TimeseriesKeyInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.timeseriesKeyInput"></a>

```csharp
public string TimeseriesKeyInput { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `CreateDatabaseObjectsIfMissing`<sup>Required</sup> <a name="CreateDatabaseObjectsIfMissing" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissing"></a>

```csharp
public bool|IResolvable CreateDatabaseObjectsIfMissing { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExistingPipelineId`<sup>Required</sup> <a name="ExistingPipelineId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.existingPipelineId"></a>

```csharp
public string ExistingPipelineId { get; }
```

- *Type:* string

---

##### `PostgresDatabase`<sup>Required</sup> <a name="PostgresDatabase" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.postgresDatabase"></a>

```csharp
public string PostgresDatabase { get; }
```

- *Type:* string

---

##### `PrimaryKeyColumns`<sup>Required</sup> <a name="PrimaryKeyColumns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.primaryKeyColumns"></a>

```csharp
public string[] PrimaryKeyColumns { get; }
```

- *Type:* string[]

---

##### `SchedulingPolicy`<sup>Required</sup> <a name="SchedulingPolicy" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.schedulingPolicy"></a>

```csharp
public string SchedulingPolicy { get; }
```

- *Type:* string

---

##### `SourceTableFullName`<sup>Required</sup> <a name="SourceTableFullName" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.sourceTableFullName"></a>

```csharp
public string SourceTableFullName { get; }
```

- *Type:* string

---

##### `TimeseriesKey`<sup>Required</sup> <a name="TimeseriesKey" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.timeseriesKey"></a>

```csharp
public string TimeseriesKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PostgresSyncedTableSpec InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a>

---


### PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference <a name="PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTime">DeltaCommitTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion">DeltaCommitVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo">PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeltaCommitTime`<sup>Required</sup> <a name="DeltaCommitTime" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTime"></a>

```csharp
public string DeltaCommitTime { get; }
```

- *Type:* string

---

##### `DeltaCommitVersion`<sup>Required</sup> <a name="DeltaCommitVersion" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion"></a>

```csharp
public double DeltaCommitVersion { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue"></a>

```csharp
public PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo">PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo</a>

---


### PostgresSyncedTableStatusLastSyncOutputReference <a name="PostgresSyncedTableStatusLastSyncOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresSyncedTableStatusLastSyncOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.deltaTableSyncInfo">DeltaTableSyncInfo</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference">PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.syncEndTime">SyncEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.syncStartTime">SyncStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSync">PostgresSyncedTableStatusLastSync</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeltaTableSyncInfo`<sup>Required</sup> <a name="DeltaTableSyncInfo" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.deltaTableSyncInfo"></a>

```csharp
public PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference DeltaTableSyncInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference">PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference</a>

---

##### `SyncEndTime`<sup>Required</sup> <a name="SyncEndTime" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.syncEndTime"></a>

```csharp
public string SyncEndTime { get; }
```

- *Type:* string

---

##### `SyncStartTime`<sup>Required</sup> <a name="SyncStartTime" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.syncStartTime"></a>

```csharp
public string SyncStartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.internalValue"></a>

```csharp
public PostgresSyncedTableStatusLastSync InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSync">PostgresSyncedTableStatusLastSync</a>

---


### PostgresSyncedTableStatusOngoingSyncProgressOutputReference <a name="PostgresSyncedTableStatusOngoingSyncProgressOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresSyncedTableStatusOngoingSyncProgressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">EstimatedCompletionTimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">LatestVersionCurrentlyProcessing</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncedRowCount">SyncedRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncProgressCompletion">SyncProgressCompletion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.totalRowCount">TotalRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgress">PostgresSyncedTableStatusOngoingSyncProgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EstimatedCompletionTimeSeconds`<sup>Required</sup> <a name="EstimatedCompletionTimeSeconds" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```csharp
public double EstimatedCompletionTimeSeconds { get; }
```

- *Type:* double

---

##### `LatestVersionCurrentlyProcessing`<sup>Required</sup> <a name="LatestVersionCurrentlyProcessing" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```csharp
public double LatestVersionCurrentlyProcessing { get; }
```

- *Type:* double

---

##### `SyncedRowCount`<sup>Required</sup> <a name="SyncedRowCount" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncedRowCount"></a>

```csharp
public double SyncedRowCount { get; }
```

- *Type:* double

---

##### `SyncProgressCompletion`<sup>Required</sup> <a name="SyncProgressCompletion" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncProgressCompletion"></a>

```csharp
public double SyncProgressCompletion { get; }
```

- *Type:* double

---

##### `TotalRowCount`<sup>Required</sup> <a name="TotalRowCount" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.totalRowCount"></a>

```csharp
public double TotalRowCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.internalValue"></a>

```csharp
public PostgresSyncedTableStatusOngoingSyncProgress InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgress">PostgresSyncedTableStatusOngoingSyncProgress</a>

---


### PostgresSyncedTableStatusOutputReference <a name="PostgresSyncedTableStatusOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresSyncedTableStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.detailedState">DetailedState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.lastProcessedCommitVersion">LastProcessedCommitVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.lastSync">LastSync</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference">PostgresSyncedTableStatusLastSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.lastSyncTime">LastSyncTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.ongoingSyncProgress">OngoingSyncProgress</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference">PostgresSyncedTableStatusOngoingSyncProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.pipelineId">PipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.provisioningPhase">ProvisioningPhase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.unityCatalogProvisioningState">UnityCatalogProvisioningState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatus">PostgresSyncedTableStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DetailedState`<sup>Required</sup> <a name="DetailedState" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.detailedState"></a>

```csharp
public string DetailedState { get; }
```

- *Type:* string

---

##### `LastProcessedCommitVersion`<sup>Required</sup> <a name="LastProcessedCommitVersion" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.lastProcessedCommitVersion"></a>

```csharp
public double LastProcessedCommitVersion { get; }
```

- *Type:* double

---

##### `LastSync`<sup>Required</sup> <a name="LastSync" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.lastSync"></a>

```csharp
public PostgresSyncedTableStatusLastSyncOutputReference LastSync { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference">PostgresSyncedTableStatusLastSyncOutputReference</a>

---

##### `LastSyncTime`<sup>Required</sup> <a name="LastSyncTime" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.lastSyncTime"></a>

```csharp
public string LastSyncTime { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `OngoingSyncProgress`<sup>Required</sup> <a name="OngoingSyncProgress" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.ongoingSyncProgress"></a>

```csharp
public PostgresSyncedTableStatusOngoingSyncProgressOutputReference OngoingSyncProgress { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference">PostgresSyncedTableStatusOngoingSyncProgressOutputReference</a>

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.pipelineId"></a>

```csharp
public string PipelineId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ProvisioningPhase`<sup>Required</sup> <a name="ProvisioningPhase" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.provisioningPhase"></a>

```csharp
public string ProvisioningPhase { get; }
```

- *Type:* string

---

##### `UnityCatalogProvisioningState`<sup>Required</sup> <a name="UnityCatalogProvisioningState" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.unityCatalogProvisioningState"></a>

```csharp
public string UnityCatalogProvisioningState { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.internalValue"></a>

```csharp
public PostgresSyncedTableStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatus">PostgresSyncedTableStatus</a>

---



