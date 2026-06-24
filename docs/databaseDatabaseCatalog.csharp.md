# `databaseDatabaseCatalog` Submodule <a name="`databaseDatabaseCatalog` Submodule" id="@cdktn/provider-databricks.databaseDatabaseCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseDatabaseCatalog <a name="DatabaseDatabaseCatalog" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/database_database_catalog databricks_database_database_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DatabaseDatabaseCatalog(Construct Scope, string Id, DatabaseDatabaseCatalogConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig">DatabaseDatabaseCatalogConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig">DatabaseDatabaseCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.resetCreateDatabaseIfNotExists">ResetCreateDatabaseIfNotExists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DatabaseDatabaseCatalogProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfig">DatabaseDatabaseCatalogProviderConfig</a>

---

##### `ResetCreateDatabaseIfNotExists` <a name="ResetCreateDatabaseIfNotExists" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.resetCreateDatabaseIfNotExists"></a>

```csharp
private void ResetCreateDatabaseIfNotExists()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatabaseDatabaseCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DatabaseDatabaseCatalog.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DatabaseDatabaseCatalog.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DatabaseDatabaseCatalog.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DatabaseDatabaseCatalog.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DatabaseDatabaseCatalog resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseDatabaseCatalog to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseDatabaseCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/database_database_catalog#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DatabaseDatabaseCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference">DatabaseDatabaseCatalogProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.createDatabaseIfNotExistsInput">CreateDatabaseIfNotExistsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseInstanceNameInput">DatabaseInstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfig">DatabaseDatabaseCatalogProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.createDatabaseIfNotExists">CreateDatabaseIfNotExists</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseInstanceName">DatabaseInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.providerConfig"></a>

```csharp
public DatabaseDatabaseCatalogProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference">DatabaseDatabaseCatalogProviderConfigOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `CreateDatabaseIfNotExistsInput`<sup>Optional</sup> <a name="CreateDatabaseIfNotExistsInput" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.createDatabaseIfNotExistsInput"></a>

```csharp
public bool|IResolvable CreateDatabaseIfNotExistsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DatabaseInstanceNameInput`<sup>Optional</sup> <a name="DatabaseInstanceNameInput" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseInstanceNameInput"></a>

```csharp
public string DatabaseInstanceNameInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.providerConfigInput"></a>

```csharp
public IResolvable|DatabaseDatabaseCatalogProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfig">DatabaseDatabaseCatalogProviderConfig</a>

---

##### `CreateDatabaseIfNotExists`<sup>Required</sup> <a name="CreateDatabaseIfNotExists" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.createDatabaseIfNotExists"></a>

```csharp
public bool|IResolvable CreateDatabaseIfNotExists { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DatabaseInstanceName`<sup>Required</sup> <a name="DatabaseInstanceName" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseInstanceName"></a>

```csharp
public string DatabaseInstanceName { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseDatabaseCatalogConfig <a name="DatabaseDatabaseCatalogConfig" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DatabaseDatabaseCatalogConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DatabaseInstanceName,
    string DatabaseName,
    string Name,
    bool|IResolvable CreateDatabaseIfNotExists = null,
    DatabaseDatabaseCatalogProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.databaseInstanceName">DatabaseInstanceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/database_database_catalog#database_instance_name DatabaseDatabaseCatalog#database_instance_name}. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/database_database_catalog#database_name DatabaseDatabaseCatalog#database_name}. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/database_database_catalog#name DatabaseDatabaseCatalog#name}. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.createDatabaseIfNotExists">CreateDatabaseIfNotExists</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/database_database_catalog#create_database_if_not_exists DatabaseDatabaseCatalog#create_database_if_not_exists}. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfig">DatabaseDatabaseCatalogProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/database_database_catalog#provider_config DatabaseDatabaseCatalog#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DatabaseInstanceName`<sup>Required</sup> <a name="DatabaseInstanceName" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.databaseInstanceName"></a>

```csharp
public string DatabaseInstanceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/database_database_catalog#database_instance_name DatabaseDatabaseCatalog#database_instance_name}.

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/database_database_catalog#database_name DatabaseDatabaseCatalog#database_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/database_database_catalog#name DatabaseDatabaseCatalog#name}.

---

##### `CreateDatabaseIfNotExists`<sup>Optional</sup> <a name="CreateDatabaseIfNotExists" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.createDatabaseIfNotExists"></a>

```csharp
public bool|IResolvable CreateDatabaseIfNotExists { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/database_database_catalog#create_database_if_not_exists DatabaseDatabaseCatalog#create_database_if_not_exists}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.providerConfig"></a>

```csharp
public DatabaseDatabaseCatalogProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfig">DatabaseDatabaseCatalogProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/database_database_catalog#provider_config DatabaseDatabaseCatalog#provider_config}.

---

### DatabaseDatabaseCatalogProviderConfig <a name="DatabaseDatabaseCatalogProviderConfig" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DatabaseDatabaseCatalogProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/database_database_catalog#workspace_id DatabaseDatabaseCatalog#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/database_database_catalog#workspace_id DatabaseDatabaseCatalog#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseDatabaseCatalogProviderConfigOutputReference <a name="DatabaseDatabaseCatalogProviderConfigOutputReference" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DatabaseDatabaseCatalogProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfig">DatabaseDatabaseCatalogProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabaseDatabaseCatalogProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfig">DatabaseDatabaseCatalogProviderConfig</a>

---



